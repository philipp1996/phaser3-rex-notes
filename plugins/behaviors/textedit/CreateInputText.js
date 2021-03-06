import InputText from '../../gameobjects/inputtext/InputText.js';

const GetValue = Phaser.Utils.Objects.GetValue;

var CreateInputText = function (text, config) {
    var scene = text.scene;
    var style = text.style;
    var backgroundColor = GetValue(config, 'backgroundColor', style.backgroundColor);
    if (backgroundColor === null) {
        backgroundColor = 'transparent';
    }
    var inputText = new InputText(scene,
        text.x, text.y,
        GetValue(config, 'width', text.width),
        GetValue(config, 'height', text.height),
        {
            text: GetValue(config, 'text', text.text),
            fontFamily: GetValue(config, 'fontFamily', style.fontFamily),
            fontSize: GetValue(config, 'fontSize', style.fontSize),
            color: GetValue(config, 'color', style.color),
            backgroundColor: backgroundColor,
            type: GetValue(config, 'type', 'text'),
        }
    );
    inputText.setOrigin(text.originX, text.originY);
    scene.add.existing(inputText);
    return inputText;
}

export default CreateInputText;