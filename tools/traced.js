// Buildings and labelled places traced by hand from the Google Maps screenshot
// (749 x 1039 px). Coordinates are screenshot pixels. build-data.js converts them
// to metres using the alignment worked out against OpenStreetMap roads:
//   x_m = (x_px - 278) * 0.88     y_m = (y_px - 1015.5) * 0.88
// (origin = the PT Wings Surya Driyorejo Factory pin, x east, y south).
module.exports = {
  scale: 0.88,
  originPx: [278, 1015.5],

  // [x0, y0, x1, y1] rectangles in screenshot pixels.
  buildings: [
    // West strip, north of the canal
    [176, 20, 272, 48], [176, 50, 272, 116], [176, 118, 272, 199], [176, 201, 272, 280],
    [176, 282, 272, 345], [176, 347, 272, 412], [178, 425, 272, 474], [178, 476, 272, 508],
    // North-centre warehouse row
    [298, 130, 352, 243], [354, 130, 418, 243], [420, 130, 495, 243],
    // Small sheds
    [318, 264, 333, 276], [352, 264, 367, 276], [385, 264, 399, 276], [413, 265, 428, 275],
    [290, 272, 308, 285], [318, 297, 357, 307], [318, 316, 333, 328], [385, 318, 398, 328],
    [446, 264, 461, 312], [445, 316, 461, 330],
    // Centre block
    [288, 350, 482, 444], [288, 455, 377, 510], [377, 455, 482, 510],
    // East of the centre block
    [498, 272, 608, 365], [500, 385, 583, 446], [500, 452, 579, 488],
    // North-east corner
    [700, 182, 749, 222], [598, 188, 625, 206], [558, 140, 590, 150],
    // West of the main road, south of the canal
    [40, 570, 153, 616], [40, 618, 137, 672], [40, 678, 141, 705], [43, 708, 138, 742],
    [43, 744, 138, 770], [43, 772, 138, 798], [53, 805, 85, 826], [93, 805, 137, 826],
    [40, 837, 137, 980], [55, 998, 120, 1012],
    [160, 566, 212, 600], [214, 563, 270, 600], [245, 626, 262, 655],
    [160, 677, 270, 707], [160, 715, 270, 740], [160, 742, 270, 768], [160, 775, 270, 800],
    [160, 802, 270, 826], [160, 828, 222, 855], [245, 836, 268, 852], [160, 860, 270, 884],
    [160, 886, 270, 912], [160, 918, 265, 944], [160, 946, 265, 970], [200, 972, 265, 982],
    // East of the main road, south of the canal
    [290, 556, 328, 583], [330, 545, 357, 560], [330, 562, 357, 580], [330, 582, 357, 605],
    [330, 607, 357, 630], [330, 632, 357, 666], [290, 632, 310, 647], [290, 650, 322, 665],
    [292, 668, 357, 766], [287, 786, 360, 812], [287, 816, 360, 840], [287, 842, 360, 868],
    [287, 884, 355, 908], [287, 910, 355, 935], [300, 940, 357, 961], [300, 963, 357, 985],
    // Centre-east, south of the canal
    [366, 542, 465, 608], [380, 612, 474, 770], [383, 805, 476, 985],
    [490, 537, 540, 610], [487, 612, 540, 682], [487, 700, 533, 790], [488, 955, 530, 1030],
  ],

  // Labelled pins seen on the screenshot, in pixels.
  places: [
    { id: 'soklin2', name: 'SoKlin 2', at: [500, 393], kind: 'company' },
    { id: 'recovered', name: 'Recovered Indonesia', at: [530, 646], kind: 'company' },
    { id: 'ober', name: 'PT Ober Keramik Technology Indonesia', at: [532, 763], kind: 'company' },
    { id: 'mpu', name: 'PT. MPU', at: [100, 907], kind: 'company' },
    { id: 'kolam', name: 'Kolam Kedaton Damar', at: [658, 170], kind: 'landmark' },
  ],

  // Places given as real GPS coordinates.
  geoPlaces: [
    { id: 'wings-factory', name: 'PT Wings Surya Driyorejo Factory', lat: -7.364192203496428, lon: 112.62121146973544, kind: 'wings' },
    { id: 'wings-distrik', name: 'Wings Distrik Driyorejo', lat: -7.357874371357993, lon: 112.6274425099355, kind: 'wings' },
  ],
};
