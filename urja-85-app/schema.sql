-- PROFILES TABLE
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null,
  email text,
  avatar_url text,
  role text default 'driver', -- driver or farmer
  fuel_preference text default 'E85', -- E20, E85, Green Hydrogen, EV
  total_green_coins integer default 0,
  onboarding_completed boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- VEHICLES TABLE
create table public.vehicles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  rc_number text not null,
  make_model text not null,
  fuel_type text, -- E85_Flex, H2_FCEV, etc.
  validation_status text default 'Pending',
  status text default 'active',
  is_favourite boolean default false,
  is_archived boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- CARBON TRANSACTIONS TABLE
create table public.carbon_transactions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  vehicle_id uuid not null references public.vehicles(id) on delete cascade,
  pump_id text, -- Assuming pumps are managed elsewhere or hardcoded
  fuel_volume_liters numeric default 0,
  co2_saved_kg numeric default 0,
  tokens_minted integer default 0,
  blockchain_tx_hash text,
  status text not null default 'active',
  processing_status text default 'waiting',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- BIOMASS LISTINGS TABLE (Kisan Connect)
create table public.biomass_listings (
  id uuid primary key default gen_random_uuid(),
  farmer_id uuid not null references auth.users(id) on delete cascade,
  crop_type text not null, -- Stover, Sugarcane
  weight_tonnes numeric not null,
  location_point text, -- e.g., 'POINT(longitude latitude)'
  base_price_inr numeric not null,
  status text default 'Open', -- Open, Bid_Accepted
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- AI GENERATED CONTENT TABLE 1
create table public.ai_content_1 (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  session_id uuid references public.carbon_transactions(id) on delete set null,
  content_title text not null,
  content_data jsonb not null,
  created_at timestamptz default now()
);

-- AI GENERATED CONTENT TABLE 2
create table public.ai_content_2 (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  session_id uuid not null references public.carbon_transactions(id) on delete cascade,
  expected_points jsonb,
  item_order integer not null,
  created_at timestamptz default now()
);

-- USER RESPONSES TABLE
create table public.user_responses (
  id uuid primary key default gen_random_uuid(),
  content_item_id uuid not null references public.ai_content_2(id) on delete cascade,
  session_id uuid not null references public.carbon_transactions(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  user_answer text not null,
  score numeric,
  result text,
  correct_points jsonb,
  missing_points jsonb,
  feedback text,
  improved_answer text,
  created_at timestamptz default now()
);

-- Enable RLS
alter table public.profiles enable row level security;
alter table public.vehicles enable row level security;
alter table public.carbon_transactions enable row level security;
alter table public.biomass_listings enable row level security;
alter table public.ai_content_1 enable row level security;
alter table public.ai_content_2 enable row level security;
alter table public.user_responses enable row level security;

-- Policies
create policy "Users can read own profile" on public.profiles for select using (auth.uid() = id);
create policy "Users can update own profile" on public.profiles for update using (auth.uid() = id) with check (auth.uid() = id);
create policy "Users can insert own profile" on public.profiles for insert with check (auth.uid() = id);

create policy "Users can manage own vehicles" on public.vehicles for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "Users can manage own transactions" on public.carbon_transactions for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "Farmers can manage own listings" on public.biomass_listings for all using (auth.uid() = farmer_id) with check (auth.uid() = farmer_id);
create policy "Users can manage own ai_content_1" on public.ai_content_1 for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "Users can manage own ai_content_2" on public.ai_content_2 for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "Users can manage own responses" on public.user_responses for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
