var createAvatar = new fabric.Canvas('canvas');
const rect = new fabric.Rect({
    width: 200,
    height: 200,
    left: 40,
    top: 100,
    strokeWidth: 5,
    stroke: 'rgb(0,0,0)',
    fill: 'rgb(255,255,255)'
});
createAvatar.add(rect).sendToBack(rect);
var text = new fabric.Text('Avatar maker', {
    left: 40,
    top: 20,
    fontSize: 40,
    fill: '#ED5564'
});
createAvatar.add(text);
for (let i = 1; i < 4; i++) {
    fabric.Image.fromURL('images/face' + i + '.png', function (img) {
        var img2 = img.scale(0.26).set({left: 150 + (i * 160), top: 100});
        createAvatar.add(img2);
        createAvatar.sendToBack(img2)

    });
    fabric.Image.fromURL('images/eyes' + i + '.png', function (img) {
        var img4 = img.scale(0.26).set({left: 150 + (i * 160), top: 300});
        createAvatar.add(img4);


    });
    fabric.Image.fromURL('images/hair' + i + '.png', function (img) {
        var img1 = img.scale(0.26).set({left: 150 + (i * 160), top: 400});
        createAvatar.add(img1);

    });

    fabric.Image.fromURL('images/glasses' + i + '.png', function (img) {
        var img3 = img.scale(0.26).set({left: 150 + (i * 160), top: 350});
        createAvatar.add(img3);

    });
}
document.getElementById('js-delete').addEventListener('click', function () {
    location.reload();
});
document.getElementById('js-save').addEventListener('click', function (name) {
    window.open(createAvatar.toDataURL({
        left: 40,
        top: 100,
        width: 205,
        height: 205,
        format: 'png'
    }));
    var gh = createAvatar.toDataURL();

    var a = document.createElement('a');
    a.href = gh;
    a.download = 'image.png';

    a.click()
});

document.getElementById('image').onchange = function handleImage(e) {
    var file = new FileReader();
    file.onload = function (event) {
        var img = new Image();
        img.src = event.target.result;
        img.onload = function () {
            var image = new fabric.Image(img);
            image.set({
                left: 40,
                top: 100
            });
            createAvatar.centerObject(image);
            createAvatar.add(image);
            createAvatar.renderAll();
        }
    };
    file.readAsDataURL(e.target.files[0]);
};