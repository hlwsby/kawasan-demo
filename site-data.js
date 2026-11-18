/*
 * Site data for Kawasan Industri Wijayakusuma, traced by hand from the site-plan image.
 *
 * Coordinates are in "plan pixels" from the original 462x640 site-plan image
 * (x to the east, y to the south). Positions and sizes are approximate.
 *
 * Edit this file to change the map. You don't need to rebuild anything:
 *   - Put a company name in a plot's `tenant` to show it instead of "Lot X".
 *   - Add or move roads; crossings are found automatically, so routing keeps working.
 *   - `type` must be one of the keys in `types`.
 */
window.SITE_DATA = {
  name: 'Kawasan Industri Wijayakusuma',
  metersPerPixel: 3,      // a 40,000 m² lot on the plan is about 75 x 62 px
  center: [240, 340],     // plan point placed at the 3D origin
  driveKmh: 20,           // speed limit inside the estate
  walkKmh: 4.8,

  types: {
    factory:   { label: 'Industrial (occupied)', ground: '#8fd19e', roof: '#3e9b5c', wall: '#e8ece9', building: true,  height: [6, 11] },
    major:     { label: 'Large factory',         ground: '#f6b77c', roof: '#e07b2c', wall: '#f1ece6', building: true,  height: [10, 16] },
    facility:  { label: 'Facility / commercial', ground: '#f4a3c8', roof: '#d6438a', wall: '#f4eef1', building: true,  height: [5, 8] },
    utility:   { label: 'Utility',               ground: '#9db8f0', roof: '#2f5fd0', wall: '#e6ebf5', building: true,  height: [4, 6] },
    available: { label: 'Available lot',         ground: '#f7f7f2', roof: null,      wall: null,      building: false },
  },

  // Estate boundary, drawn as a pale ground pad.
  boundary: [
    [165, 46], [440, 46], [440, 190], [362, 196], [362, 408], [350, 425],
    [306, 445], [306, 600], [250, 645], [60, 645], [60, 352], [110, 334],
    [110, 186], [165, 186],
  ],

  // Road centre lines. Width is in plan pixels.
  roads: [
    { id: 'central', name: 'Central Avenue',  width: 10, points: [[237, 100], [237, 600]] },
    { id: 'main',    name: 'Main Boulevard',  width: 10, points: [[62, 415], [345, 415]] },
    { id: 'east',    name: 'East Road',       width: 8,  points: [[300, 100], [300, 488]] },
    { id: 'west',    name: 'West Road',       width: 8,  points: [[152, 338], [152, 642]] },
    { id: 'farwest', name: 'Far West Road',   width: 8,  points: [[101, 338], [101, 628]] },
    { id: 'north',   name: 'North Road',      width: 8,  points: [[170, 185], [355, 185]] },
    { id: 'mid',     name: 'Middle Street',   width: 8,  points: [[101, 338], [237, 338]] },
    { id: 'south1',  name: 'South Street 1',  width: 8,  points: [[101, 488], [300, 488]] },
    { id: 'south2',  name: 'South Street 2',  width: 8,  points: [[101, 600], [237, 600]] },
    { id: 'garden',  name: 'Garden Lane',     width: 8,  points: [[170, 185], [170, 260], [237, 260]] },
    { id: 'ext1',    name: 'Expansion Road 1', width: 8, points: [[170, 100], [435, 100]] },
    { id: 'ext2',    name: 'Expansion Road 2', width: 8, points: [[170, 140], [435, 140]] },
    { id: 'extw',    name: 'Expansion West',   width: 8, points: [[170, 100], [170, 185]] },
    { id: 'exte',    name: 'Expansion East',   width: 8, points: [[355, 100], [355, 185]] },
  ],

  // Gates and other points of interest. `axis` is the direction of the road under a gate.
  pois: [
    { id: 'gate-main', name: 'Main Gate', type: 'gate', at: [152, 636], axis: 'ns' },
    { id: 'gate-east', name: 'East Gate', type: 'gate', at: [340, 415], axis: 'ew' },
  ],

  // Zones are areas without lots, outlined on the ground.
  zones: [
    {
      id: 'housing', name: 'Worker Housing (planned)', kind: 'housing',
      polygon: [[30, 260], [160, 260], [160, 298], [146, 332], [30, 332]],
    },
  ],

  // Lots: rect = [x0, y0, x1, y1] in plan pixels.
  plots: [
    // Block A – west column
    { id: 'A-1', type: 'factory',  tenant: '', rect: [70, 362, 97, 410] },
    { id: 'A-2', type: 'factory',  tenant: '', rect: [70, 420, 97, 455] },
    { id: 'A-3', type: 'factory',  tenant: '', rect: [70, 458, 97, 486] },
    { id: 'A-4', type: 'facility', tenant: '', rect: [70, 494, 97, 516] },
    { id: 'A-5', type: 'factory',  tenant: '', rect: [70, 520, 97, 548] },
    { id: 'A-6', type: 'factory',  tenant: '', rect: [70, 552, 97, 588] },
    { id: 'A-7', type: 'factory',  tenant: '', rect: [70, 592, 97, 625] },

    // Block B – between Far West Road and West Road
    { id: 'B-1', type: 'major',    tenant: '', rect: [106, 343, 147, 410] },
    { id: 'B-2', type: 'factory',  tenant: '', rect: [106, 420, 147, 440] },
    { id: 'B-3', type: 'factory',  tenant: '', rect: [106, 443, 147, 483] },
    { id: 'B-4', type: 'factory',  tenant: '', rect: [106, 493, 147, 540] },
    { id: 'B-5', type: 'factory',  tenant: '', rect: [106, 544, 147, 595] },
    { id: 'GO',  type: 'utility',  tenant: 'Gate Office', rect: [118, 605, 146, 628] },

    // Block C – between West Road and Central Avenue
    { id: 'C-1', type: 'major',    tenant: '', rect: [157, 343, 197, 410] },
    { id: 'C-2', type: 'factory',  tenant: '', rect: [201, 343, 232, 358] },
    { id: 'C-3', type: 'factory',  tenant: '', rect: [201, 361, 232, 410] },
    { id: 'C-4', type: 'major',    tenant: '', rect: [157, 420, 232, 483] },
    { id: 'C-5', type: 'factory',  tenant: '', rect: [157, 493, 197, 525] },
    { id: 'C-6', type: 'factory',  tenant: '', rect: [201, 493, 232, 525] },
    { id: 'C-7', type: 'factory',  tenant: '', rect: [157, 529, 197, 595] },
    { id: 'C-8', type: 'factory',  tenant: '', rect: [201, 529, 232, 595] },

    // Block D – between Central Avenue and East Road
    { id: 'D-1',  type: 'factory', tenant: '', rect: [242, 190, 267, 215] },
    { id: 'D-2',  type: 'factory', tenant: '', rect: [270, 190, 296, 215] },
    { id: 'D-3',  type: 'factory', tenant: '', rect: [242, 219, 296, 240] },
    { id: 'D-4',  type: 'factory', tenant: '', rect: [242, 244, 267, 262] },
    { id: 'D-5',  type: 'factory', tenant: '', rect: [270, 244, 296, 262] },
    { id: 'D-6',  type: 'factory', tenant: '', rect: [242, 266, 296, 290] },
    { id: 'D-7',  type: 'factory', tenant: '', rect: [242, 294, 267, 318] },
    { id: 'D-8',  type: 'factory', tenant: '', rect: [270, 294, 296, 318] },
    { id: 'D-9',  type: 'factory', tenant: '', rect: [242, 322, 296, 346] },
    { id: 'D-10', type: 'factory', tenant: '', rect: [242, 350, 267, 378] },
    { id: 'D-11', type: 'factory', tenant: '', rect: [270, 350, 296, 378] },
    { id: 'D-12', type: 'factory', tenant: '', rect: [242, 382, 267, 410] },
    { id: 'D-13', type: 'utility', tenant: '', rect: [270, 382, 296, 410] },

    // Block E – east of East Road
    { id: 'E-1', type: 'factory', tenant: '', rect: [306, 190, 352, 222] },
    { id: 'E-2', type: 'factory', tenant: '', rect: [306, 226, 352, 252] },
    { id: 'E-3', type: 'factory', tenant: '', rect: [306, 256, 352, 276] },
    { id: 'E-4', type: 'factory', tenant: '', rect: [306, 280, 352, 345] },
    { id: 'E-5', type: 'factory', tenant: '', rect: [306, 349, 352, 385] },
    { id: 'E-6', type: 'factory', tenant: '', rect: [306, 389, 352, 410] },

    // Block F – south of Main Boulevard, east of Central Avenue
    { id: 'F-1', type: 'facility', tenant: '', rect: [242, 420, 272, 437] },
    { id: 'F-2', type: 'utility',  tenant: '', rect: [276, 420, 296, 437] },
    { id: 'F-3', type: 'factory',  tenant: '', rect: [242, 441, 296, 483] },
    { id: 'F-4', type: 'factory',  tenant: '', rect: [242, 493, 296, 522] },
    { id: 'F-5', type: 'factory',  tenant: '', rect: [242, 526, 296, 560] },

    // Block G – centre, around Garden Lane
    { id: 'G-1', type: 'available', tenant: '', rect: [118, 192, 165, 250] },
    { id: 'G-2', type: 'available', tenant: '', rect: [175, 192, 232, 255] },
    { id: 'G-3', type: 'factory',   tenant: '', rect: [175, 266, 200, 296] },
    { id: 'G-4', type: 'factory',   tenant: '', rect: [205, 266, 232, 296] },
    { id: 'G-5', type: 'utility',   tenant: '', rect: [175, 300, 200, 332] },
    { id: 'G-6', type: 'factory',   tenant: '', rect: [205, 300, 232, 332] },

    // Expansion area (north)
    { id: 'X-1',  type: 'available', tenant: '', rect: [174, 55, 233, 96] },
    { id: 'X-2',  type: 'available', tenant: '', rect: [241, 55, 296, 96] },
    { id: 'X-3',  type: 'available', tenant: '', rect: [304, 55, 351, 96] },
    { id: 'X-4',  type: 'available', tenant: '', rect: [359, 55, 432, 96] },
    { id: 'X-5',  type: 'available', tenant: '', rect: [174, 104, 233, 136] },
    { id: 'X-6',  type: 'available', tenant: '', rect: [241, 104, 296, 136] },
    { id: 'X-7',  type: 'available', tenant: '', rect: [304, 104, 351, 136] },
    { id: 'X-8',  type: 'available', tenant: '', rect: [359, 104, 432, 136] },
    { id: 'X-9',  type: 'available', tenant: '', rect: [174, 144, 233, 181] },
    { id: 'X-10', type: 'available', tenant: '', rect: [241, 144, 296, 181] },
    { id: 'X-11', type: 'available', tenant: '', rect: [304, 144, 351, 181] },
    { id: 'X-12', type: 'available', tenant: '', rect: [359, 144, 432, 181] },
  ],
};
