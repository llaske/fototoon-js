define(function (require) {
    var activity = require("sugar-web/activity/activity");
    var datastore = require("sugar-web/datastore");


    // initialize canvas size
    var onAndroid = /Android/i.test(navigator.userAgent);
    if (window.location.search.indexOf('onAndroid') > -1) {
        onAndroid = true;
    };

    var onXo = ((window.innerWidth == 1200) && (window.innerHeight >= 900));
    var sugarCellSize = 75;
    var sugarSubCellSize = 15;
    if (!onXo && !onAndroid) {
        sugarCellSize = 55;
        sugarSubCellSize = 11;
    };
    if (onAndroid) {
        // set to the size of the bottom bar
        sugarCellSize = 0;
    }

    // Manipulate the DOM only when it is ready.
    require(['domReady!'], function (doc) {


        // Initialize the activity.
        activity.setup();

        // HERE GO YOUR CODE

        // this data was generated by fototoon activity (python)
        test_data = {"version": "1",
            "boxs": [
                // title box
                {"img_w": 0, "img_y": 0,
                 "image_name": "", "img_x": 0, "slideshow_duration": 10,
                    "globes": [
                {"direction": null, "text_font_description": "Sans 10",
                "globe_type": "RECTANGLE", "height": 13, "width": 81,
                "text_color": [0, 0, 0], "radio": 15, "text_width": 76,
                "y": 225, "x": 600, "text_height": 8, "title_globe": true,
                "text_text": "T\u00edtulo:"}], "img_h": 0},

                // this is the first box
                {"img_w": 589, "img_y": 0, "image_name": "image1.png",
                 "img_x": 0, "img_h": 441, "slideshow_duration": 10,
                    "globes": [
                        {'direction': 'abajo',
                        'text_font_description': 'Sans 14',
                        'globe_type': 'EXCLAMATION',
                        'text_text': 'Hey!',
                        'height': 36.66666666666667, 'width': 76.66666666666667,
                        'text_color': [60909, 9509, 10537], 'radio': 30,
                        'text_width': 46, 'y': 72.0, 'x': 96.0, 'text_height': 22,
                        'title_globe': false, 'point_0': 40.5, 'point_1': 54},
                        {'direction': 'abajo',
                        'text_font_description': 'Serif 10',
                        'globe_type': 'GLOBE', 'text_text': 'Shhhh...',
                        'height': 26.666666666666668, 'width': 80.0,
                        'text_color': [0, 0, 0], 'radio': 30, 'mode': 'despacio',
                        'text_width': 48, 'y': 35.0, 'x': 485.0, 'text_height': 16,
                        'title_globe': false,
                        'point_0': -38.0, 'point_1': 39.33333333333333},
                        {'direction': 'abajo',
                        'text_font_description': 'Sans bold 10',
                        'globe_type': 'GLOBE', 'text_text': 'Hola',
                        'height': 26.666666666666668, 'width': 80.0,
                        'text_color': [0, 0, 0], 'radio': 30, 'mode': 'normal',
                        'text_width': 48, 'y': 155.0, 'x': 492.0,
                        'text_height': 16, 'title_globe': false,
                        'point_0': -54.0, 'point_1': 30.333333333333343},
                        {'direction': 'arriba',
                        'text_font_description': 'Sans italic 10',
                        'globe_type': 'CLOUD', 'text_text': 'Servira esto?',
                        'height': 26.666666666666668, 'width': 80.0,
                        'text_color': [0, 0, 0], 'radio': 30, 'text_width': 48,
                        'y': 251.0, 'x': 128.0, 'text_height': 16,
                        'title_globe': false,
                        'point_0': 49.0, 'point_1': 21.333333333333343},
                        {'direction': null,
                        'text_font_description': 'Monospace 10',
                        'globe_type': 'RECTANGLE', 'height': 15, 'width': 140,
                        'text_color': [0, 0, 0], 'radio': 15, 'text_width': 135,
                        'y': 288.0, 'x': 442.0, 'text_height': 10,
                        'title_globe': false,
                        'text_text': 'Test con todas los globos'}],
                },
                // second box
                {"img_w": 589, "img_y": 0, "image_name": "image2.png",
                "img_x": 0, "slideshow_duration": 10,
                "globes": [
                {"direction": "abajo", "text_font_description": "Sans 10",
                "globe_type": "CLOUD",
                "text_text": "Y solo estoy un mes atrasado...",
                "height": 48.333333333333336, "width": 118.33333333333334,
                "text_color": [0, 0, 0], "radio": 30, "text_width": 71,
                "y": 71.0, "x": 201.0, "text_height": 29, "title_globe": false,
                "point_0": 63.0, "point_1": 32.66666666666666}], "img_h": 441}]};

        require("toon");

        var mainCanvas = document.getElementById("mainCanvas");
        // remove 5 more to be sure no scrollbars are visible
        mainCanvas.height = window.innerHeight - sugarCellSize - 5;
        mainCanvas.width = mainCanvas.height * 4 / 3;
        mainCanvas.style.left = ((window.innerWidth - mainCanvas.width) / 2) + "px";

        comic_box_data = test_data['boxs'][1];
        console.log(comic_box_data);
        this.comicBox = new toon.ComicBox(mainCanvas, comic_box_data);
        this.comicBox.init();

    });

});
