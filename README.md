# Physics Explorer

🧠 UI/UX BUILD: High-Fidelity Interactive Physics Dashboard

Please build a pixel-perfect, single-page React application based exactly on the attached image. This is a premium educational dashboard. Do not use generic templates; rely heavily on the visual structure, spacing, and typography shown in the reference.

🎨 DESIGN SYSTEM & THEME

- Backgrounds: App background is white (#ffffff). Panels and cards use very soft, light grays/blues (e.g., #f8f9fa or #f3f4f6). 

- Primary Accent: Soft Indigo/Purple (use the exact hex from the active buttons/sliders in the image).

- Typography: Modern, clean sans-serif (like Inter or Roboto). Mathematical notations must use proper formatting.

- Layout: Full viewport width, divided into a top navigation area and a two-column main workspace (Left: 65% width, Right: 35% width).

- UI Elements: Soft rounded corners (approx. 8px - 12px), subtle borders, minimal drop shadows.

🏗️ COMPONENT BREAKDOWN (Top to Bottom, Left to Right)

1. Global Header:

- Left: Logo "Physica" (bold) with subtitle "Understand. Visualize. Master." Icon: stylized atom.

- Center (Nav): Links for Home (active, purple underline), Explore Concepts, My Learning, Classroom, Resources. Include subtle icons for each.

- Right: Outline button "Upload" (purple text/border), Bell icon, User avatar circle.

2. Sub-Header:

- Left: Dropdown titled "Projectile Motion" with a settings/cube icon.

- Right: Tabs -> Explain (active, purple text/line), Derivation, Formulae, Graphs, Quiz. Expand/Fullscreen icon on the far right.

3. Left Column (Simulation & Inputs):

- Canvas Area: Large panel with a light blue/gray background. 

  - Top-left floating controls: Pill-shaped toggle group (3D View [active purple], 2D View, Vector, Trajectory, Grid).

  - Top-right floating card: Live stats table (Time, Height, Range, Velocity) with values right-aligned. Velocity value is orange.

  - Viewport contents: Draw a 3D grid floor, a parabolic dotted trajectory, and axes (y and x) with numbers. Include an illustration/placeholder of a cannon.

- Controls Panel (Below Canvas): 

  - Three distinct input groups: Initial Velocity (20 m/s), Launch Angle (45°), Gravity (9.81 m/s²). 

  - Each group must have a label, a large numeric input, unit label, and a purple horizontal slider below it.

  - Far right: "More Options" button with a filter icon.

- Live Results Panel: 

  - Four columns: Time of Flight (2.89 s, green text), Maximum Height (25.49 m, purple text), Range (40.78 m, blue text), Final Velocity (20.00 m/s, orange text).

- Bottom Input Bar: "Ask a topic or question..." with a purple paper-airplane send button.

4. Right Column (Explanation & Chat):

- Explanation Card: 

  - Title "Explanation". Paragraph describing projectile motion. 

  - Two bullet points with math (Horizontal motion: a_x = 0; Vertical motion: a_y = -g). Use colored dots for bullets (green and blue).

- Chat Interface ("Ask Physica"):

  - Right-aligned User bubble (Purple background, white text): "Why is the vertical velocity zero at the highest point?"

  - Left-aligned AI bubble (White background, gray border, atom icon): Detailed text response.

  - Chat input bar: "Ask anything..." with a purple send button.

- Insight Card (Bottom Right): Light purple background, lightbulb icon. Title "Key Insight" with supporting text about the 45° angle.

⚙️ TECHNICAL REQUIREMENTS

- Tech Stack: React + Tailwind CSS.

- Ensure all sliders and inputs look interactive (hover states, focus rings).

- The layout must be responsive, stacking the right column below the left column on smaller screens.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/2fc3ae1a-dafe-4d1c-a7fe-e22e5611d434).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
