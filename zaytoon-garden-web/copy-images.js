const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\Furqan\\.gemini\\antigravity\\brain\\892efef1-8767-4345-93da-f69468b6afc4';
const destDir = path.join(__dirname, 'public', 'images');

const copies = [
  ['mutton_afghani_1778241394818.png', 'mutton-afghani.png'],
  ['kabli_pulao_1778241433096.png', 'kabli-pulao.png'],
  ['mutton_karahi_1778241452076.png', 'mutton-karahi.png'],
  ['reshmi_kabab_1778241469819.png', 'reshmi-kabab.png'],
  ['kashmiri_chai_1778241487600.png', 'kashmiri-chai.png'],
  ['sajji_dish_1778241519166.png', 'sajji.png'],
  ['dum_pukht_1778241533792.png', 'dum-pukht.png'],
  ['afghani_karahi_1778241552151.png', 'afghani-karahi.png'],
  ['garden_night_1778241568092.png', 'garden-night.png'],
  ['family_dining_1778241585073.png', 'family-dining.png'],
];

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

copies.forEach(([src, dest]) => {
  const srcPath = path.join(srcDir, src);
  const destPath = path.join(destDir, dest);
  try {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied: ${dest}`);
  } catch (e) {
    console.error(`Failed: ${dest} - ${e.message}`);
  }
});

console.log('Done!');
