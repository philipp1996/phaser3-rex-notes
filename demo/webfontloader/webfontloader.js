'use strict'

import WebFontLoaderPlugin from './../../plugins/webfontloader-plugin.js';

class Demo extends Phaser.Scene {
    constructor() {
        super({
            key: 'demo'
        })
    }

    preload() {
        this.load.webFont('bangers', {
            google: {
                families: ['Bangers']
            }
        });
        this.load.on('webfontactive', function (fileObj, familyName) {
            console.log('font-active: ' + familyName)
        });
        this.load.on('webfontinactive', function (fileObj, familyName) {
            console.log('font-inactive: ' + familyName)
        })
    }

    create() {
        this.add.text(100, 100, 'Hello ', {
            font: '64px Bangers',
            fill: '#7744ff'
        })
    }

    update() {}
}

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Demo
};

var game = new Phaser.Game(config);