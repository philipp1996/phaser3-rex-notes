import BBCodeTextPlugin from '../../plugins/bbcodetext-plugin.js';
import TextEditPlugin from '../../plugins/textedit-plugin.js';

class Demo extends Phaser.Scene {
    constructor() {
        super({
            key: 'examples'
        })
    }

    preload() { }

    create() {
        var printText = this.add.rexBBCodeText(400, 300, ' ', {
            color: 'yellow',
            fontSize: '24px',
            fixedWidth: 200,
            // fixedHeight: 30,
            backgroundColor: '#333333',
        })
            .setOrigin(0.5)
            .setInteractive()
            .on('pointerdown', function () {
                this.plugins.get('rexTextEdit').edit(printText, function (textObejct) {
                    textObejct.setData('name', textObejct.text);
                    console.log(printText.getData('name'));
                });
            }, this);

        printText
            .setData('name', 'abc')
            .setText(printText.getData('name'));
    }

    update() { }
}

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    dom: {
        createContainer: true
    },
    scene: Demo,
    plugins: {
        global: [
            {
                key: 'BBCodeTextPlugin',
                plugin: BBCodeTextPlugin,
                start: true
            },
            {
                key: 'rexTextEdit',
                plugin: TextEditPlugin,
                start: true
            }
        ]
    }
};

var game = new Phaser.Game(config);