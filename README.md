# 📘 PocketPlace -- Project Documentation

## Overview

PocketPlace is a web app that helps users remember where they last
placed their personal belongings. It acts as a lightweight "second
brain" for item tracking, built to be fast, simple, and mobile-friendly.

The app allows users to: - Add items they want to track (e.g., phone,
wallet, keys). - Record the last place they saw or placed the item. -
Quickly search and retrieve this information later. - Optionally, view a
history of past locations.

---

## Tech Stack

- **Frontend + Backend**: [SvelteKit](https://kit.svelte.dev/)\
- **Database**: PostgreSQL (Supabase, Neon, or Railway for free
  hosting)\
- **ORM**: Prisma or Drizzle\
- **Styling**: TailwindCSS (for responsive, mobile-first UI)\
- **Deployment**: Vercel (frontend + API routes)\
- **Auth (future)**: Supabase Auth or Lucia

---

## Core Features (MVP)

1.  **Add Item**
    - Name of the item (string).\
    - Optional description/photo (future enhancement).
2.  **Update Location**
    - Record where the item was last seen (string).\
    - Automatically timestamp each entry.
3.  **View Items**
    - List all items with their last known location.
4.  **Search**
    - Quickly find an item by name.

---

## Database Schema (Postgres)

```sql
-- Table: items
CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Table: locations
CREATE TABLE locations (
  id SERIAL PRIMARY KEY,
  item_id INT REFERENCES items(id) ON DELETE CASCADE,
  place TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

---

## API Endpoints (SvelteKit /api routes)

- `GET /api/items` → list all items + last location.\
- `POST /api/items` → create a new item.\
- `GET /api/items/[id]` → get one item + location history.\
- `PUT /api/items/[id]` → update an item's last seen location.

---

## File Structure

    src/
      routes/
        +layout.svelte         # Global layout
        +page.svelte           # Dashboard: list of items

        add/
          +page.svelte         # Add new item form

        items/[id]/
          +page.svelte         # Item detail + update location

        api/
          items/
            +server.ts         # GET (list), POST (create)
          items/[id]/
            +server.ts         # GET (one), PUT (update location)

---

## Example Flow

1.  User adds an item: "Phone".\
2.  User updates location: "Living room desk".\
3.  App saves this in `locations` with a timestamp.\
4.  When the user searches "Phone", PocketPlace shows:
    - Last seen: _Living room desk, 2 hours ago_.

---

## Future Enhancements

- **Photos**: Attach an image to items.\
- **QR Codes / NFC**: Scan to auto-update item location.\
- **Reminders**: Notify if an item hasn't been updated in X days.\
- **Multi-user / Auth**: Allow multiple people to use the app with
  accounts.
