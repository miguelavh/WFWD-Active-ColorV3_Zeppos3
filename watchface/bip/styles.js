import {img,range} from "../../utils/helper";
import {Colors} from "../../utils/config/constants";

const bgNumArr = range(10).map((v) => {
    return img(`bgNum/${v}.png`);
});

const bgNumLowArr = range(10).map((v) => {
    return img(`bgNumLow/${v}.png`);
});

const bgNumHighArr = range(10).map((v) => {
    return img(`bgNumHigh/${v}.png`);
});

const bigNumArr = range(10).map((v) => {
    return img(`bigNum/${v}.png`);
});

const bigNumAODArr = range(10).map((v) => {
    return img(`bigNumAOD/${v}.png`);
});

// also used for bg value in AOD
const bgNumAODArr = range(10).map((v) => {
    return img(`bgNumAOD/${v}.png`);
});

// also used for bg value in AOD
const bgNumAODLowArr = range(10).map((v) => {
    return img(`bgNumAODLow/${v}.png`);
});

// also used for bg value in AOD
const bgNumAODHighArr = range(10).map((v) => {
    return img(`bgNumAODHigh/${v}.png`);
});



// also used for bg value in AOD
const bgNumStandAODArr = range(10).map((v) => {
    return img(`bgNumStandAOD/${v}.png`);
});

// also used for bg value in AOD
const bgNumStandAODLowArr = range(10).map((v) => {
    return img(`bgNumStandAODLow/${v}.png`);
});

// also used for bg value in AOD
const bgNumStandAODHighArr = range(10).map((v) => {
    return img(`bgNumStandAODHigh/${v}.png`);
});




const bgBigNumArr = range(10).map((v) => {
    return img(`bgBigNum/${v}.png`);
});

const bgBigNumLowArr = range(10).map((v) => {
    return img(`bgBigNumLow/${v}.png`);
});

const bgBigNumHighArr = range(10).map((v) => {
    return img(`bgBigNumHigh/${v}.png`);
});

// also used for bg value in AOD
const bgBigNumAODArr = range(10).map((v) => {
    return img(`bgBigNumAOD/${v}.png`);
});

// also used for bg value in AOD
const bgBigNumAODLowArr = range(10).map((v) => {
    return img(`bgBigNumAODLow/${v}.png`);
});

// also used for bg value in AOD
const bgBigNumAODHighArr = range(10).map((v) => {
    return img(`bgBigNumAODHigh/${v}.png`);
});


const smallNumArr = range(10).map((v) => {
    return img(`smallNum/${v}.png`);
});

const timeNums = range(10).map((v) => {
    return img(`time_numbers/${v}.png`);
});

const timeNumsAOD = range(10).map((v) => {
    return img(`time_numbers_aod/${v}.png`);
});

const DW = 320;
const DH = 380;
const T_WIDTH = 50;
const T_HEIGHT = 94;
const T_SPACE = 10;

const dateline = DH/2+T_HEIGHT+T_SPACE/2+21+6;
const statNums = range(0, 10).map((v) => {
    return img(`status_numbers/s${v}.png`);
});

export const DIGITAL_TIME_H = {
    hour_startX: px(71),
    hour_startY: px(85+6),
    hour_zero: true,
    hour_space: 2,
    hour_align: hmUI.align.CENTER_H,
    hour_array: timeNums,
    hour_unit_sc: img('bigNum/sp.png'), // colon
    hour_unit_tc: img('bigNum/sp.png'),
    hour_unit_en: img('bigNum/sp.png'),
    minute_zero: true,
    minute_space: 2,
    minute_align: hmUI.align.CENTER_H,
    minute_array: timeNums,
    minute_follow: 1,
    am_x: px(198),
    am_y: px(100+6),
    am_sc_path: img('bigNum/am.png'),
    am_en_path: img('bigNum/am.png'),
    pm_x: px(198),
    pm_y: px(100+6),
    pm_sc_path: img('bigNum/pm.png'),
    pm_en_path: img('bigNum/pm.png'),
    second_zero: true,
    second_startX: 96,
    second_startY: dateline,
    second_align: hmUI.align.CENTER_H,
    second_array: statNums,
    second_space: 3,
    show_level: hmUI.show_level.ONLY_NORMAL
};

export const DIGITAL_TIME_H_BIG = {
    hour_startX: px(71),
    hour_startY: px(234+6),
    hour_zero: true,
    hour_space: 2,
    hour_align: hmUI.align.CENTER_H,
    hour_array: timeNums,
    hour_unit_sc: img('bigNum/sp.png'), // colon
    hour_unit_tc: img('bigNum/sp.png'),
    hour_unit_en: img('bigNum/sp.png'),
    minute_zero: true,
    minute_space: 2,
    minute_align: hmUI.align.CENTER_H,
    minute_array: timeNums,
    minute_follow: 1,
    am_x: px(198),
    am_y: px(234+6),
    am_sc_path: img('bigNum/am.png'),
    am_en_path: img('bigNum/am.png'),
    pm_x: px(198),
    pm_y: px(234+6),
    pm_sc_path: img('bigNum/pm.png'),
    pm_en_path: img('bigNum/pm.png'),
    second_zero: true,
    second_startX: 96,
    second_startY: dateline,
    second_align: hmUI.align.CENTER_H,
    second_array: statNums,
    second_space: 3,
    show_level: hmUI.show_level.ONLY_NORMAL
};

export const DIGITAL_TIME_V = {
	hour_zero: true,
    hour_startX: (DW-T_SPACE)/2-T_WIDTH,
    hour_startY: (DH-T_SPACE)/2-T_HEIGHT+5,
    hour_align: hmUI.align.CENTER_H,
    hour_array: timeNums,
    hour_space: T_SPACE,
    hour_unit_sc: null, // colon
    hour_unit_tc: null,
    hour_unit_en: null,

    minute_follow: false,
    minute_zero: true,
    minute_startX: (DW-T_SPACE)/2-T_WIDTH,
    minute_startY: ((DH+T_SPACE-9)/2)-32,
    minute_align: hmUI.align.CENTER_H,
    minute_array: timeNums,
    minute_space: T_SPACE,

    second_zero: true,
    second_startX: 96,
    second_startY: dateline,
    second_align: hmUI.align.CENTER_H,
    second_array: statNums,
    second_space: 3,
	
    am_sc_path: null,
    am_en_path: null,
    pm_sc_path: null,
    pm_en_path: null,

    show_level: hmUI.show_level.ONLY_NORMAL	
};

export const DIGITAL_TIME_AOD_V = {
    hour_startX: px(71),
    hour_startY: px(77+6),
    hour_zero: true,
    hour_space: 2,
    hour_align: hmUI.align.CENTER_H,
    hour_array: timeNumsAOD,
    hour_unit_sc: img('bigNumAOD/sp.png'), // colon
    hour_unit_tc: img('bigNumAOD/sp.png'),
    hour_unit_en: img('bigNumAOD/sp.png'),
    minute_zero: true,
    minute_space: 2,
    minute_align: hmUI.align.CENTER_H,
    minute_array: timeNumsAOD,
    minute_follow: 1,
    am_sc_path: null,
    am_en_path: null,
    pm_sc_path: null,
    pm_en_path: null,
    second_array: null,
    show_level: hmUI.show_level.ONAL_AOD
	
/*	hour_zero: true,
    hour_startX: (DW-T_SPACE)/2-T_WIDTH,
    hour_startY: (DH-T_SPACE)/2-T_HEIGHT-50,
    hour_align: hmUI.align.CENTER_H,
    hour_array: timeNumsAOD,
    hour_space: T_SPACE,
    hour_unit_sc: null, // colon
    hour_unit_tc: null,
    hour_unit_en: null,
	
    minute_follow: false,
    minute_zero: true,
    minute_startX: (DW-T_SPACE)/2-T_WIDTH,
    minute_startY: ((DH+T_SPACE-11)/2)-30-47,
    minute_align: hmUI.align.CENTER_H,
    minute_array: timeNumsAOD,
    minute_space: T_SPACE,
	
    am_sc_path: null,
    am_en_path: null,
    pm_sc_path: null,
    pm_en_path: null,
	
    second_array: null,
    show_level: hmUI.show_level.ONAL_AOD*/
};

export const LOG = {
    x: px(0),
    y: px(123+6),
    w: px(320),
    h: px(100),
    color: Colors.defaultTransparent,
    text_size: px(33),
    align_h: hmUI.align.CENTER_H,
    align_v: hmUI.align.TOP,
    text_style: hmUI.text_style.NONE,
};


export const BG_VALUE_TEXT_IMG_AOD = {
    x: px(38),
    y: px(211+6),
    w: px(203),
	h_space: 2,	
    align_h: hmUI.align.CENTER_H,
    dot_image: img('bgNumAOD/d.png'),
    font_array: bgNumAODArr,
    show_level: hmUI.show_level.ONAL_AOD
};

export const BG_VALUE_TEXT_IMG_LOW_AOD = {
    x: px(38),
    y: px(211+6),
    w: px(203),
	h_space: 2,		
    align_h: hmUI.align.CENTER_H,
    dot_image: img('bgNumAODLow/d.png'),
    font_array: bgNumAODLowArr,
    show_level: hmUI.show_level.ONAL_AOD
};

export const BG_VALUE_TEXT_IMG_HIGH_AOD = {
    x: px(38),
    y: px(211+6),
    w: px(203),
	h_space: 2,		
    align_h: hmUI.align.CENTER_H,
    dot_image: img('bgNumAODHigh/d.png'),
    font_array: bgNumAODHighArr,
    show_level: hmUI.show_level.ONAL_AOD
};

export const BG_VALUE_TEXT_IMG_AOD_STAND = {
    pos_x: px(9),
    pos_y: px(0),
	w: px(390),
    h: px(220),
    align_h: hmUI.align.CENTER_H,
    align_v: hmUI.align.CENTER_V,
    dot_image: img('bgNumStandAOD/d.png'),
    font_array: bgNumStandAODArr,
    center_x: 195,
    center_y: 110,	
	angle: 90,
    show_level: hmUI.show_level.ONAL_AOD
};

export const BG_VALUE_TEXT_IMG_LOW_AOD_STAND = {
    pos_x: 9,
    pos_y: 0,
	w: 390,
    h: 220,
    align_h: hmUI.align.CENTER_H,
    align_v: hmUI.align.CENTER_V,
    dot_image: img('bgNumStandAODLow/d.png'),
    font_array: bgNumStandAODLowArr,
    center_x: 195,
    center_y: 110,	
	angle: 90,
    show_level: hmUI.show_level.ONAL_AOD
};

export const BG_VALUE_TEXT_IMG_HIGH_AOD_STAND = {
    pos_x: 9,
    pos_y: 0,
	w: 390,
    h: 220,
    align_h: hmUI.align.CENTER_H,
    align_v: hmUI.align.CENTER_V,
    dot_image: img('bgNumStandAODHigh/d.png'),
    font_array: bgNumStandAODHighArr,
    center_x: 195,
    center_y: 110,	
	angle: 90,
    show_level: hmUI.show_level.ONAL_AOD
};

export const BG_VALUE_NO_DATA_TEXT = {
    x: px(69),
    y: px(230+6),
    w: px(131),
    h: px(47),
    color: Colors.white,
    text_size: px(34),
    align_h: hmUI.align.RIGHT,
    align_v: hmUI.align.CENTER_V,
    text_style: hmUI.text_style.NONE,
    text: 'No data',
    show_level: hmUI.show_level.ONLY_NORMAL
};

export const BG_VALUE_NO_DATA_TEXT_BIG = {
    x: px(37),
    y: px(94+6),
    w: px(197),
    h: px(80),
	h_space: 1,		
    color: Colors.white,
    text_size: px(40),
    align_h: hmUI.align.RIGHT,
    align_v: hmUI.align.CENTER_V,
    text_style: hmUI.text_style.NONE,
    text: 'No data',
    show_level: hmUI.show_level.ONLY_NORMAL
};

export const BG_VALUE_TEXT_IMG = {
    x: px(58),
    y: px(230+6),
    w: px(135),
	h_space: 1,		
    align_h: hmUI.align.CENTER_H,
    dot_image: img('bgNum/d.png'),
    font_array: bgNumArr,
    visible: false,
    show_level: hmUI.show_level.ONLY_NORMAL
};

export const BG_VALUE_TEXT_IMG_LOW = {
    x: px(58),
    y: px(230+6),
    w: px(135),
	h_space: 1,		
    align_h: hmUI.align.CENTER_H,
    dot_image: img('bgNumLow/d.png'),
    font_array: bgNumLowArr,
    visible: false,
    show_level: hmUI.show_level.ONLY_NORMAL
};

export const BG_VALUE_TEXT_IMG_HIGH = {
    x: px(58),
    y: px(230+6),
    w: px(135),
	h_space: 1,		
    align_h: hmUI.align.CENTER_H,
    dot_image: img('bgNumHigh/d.png'),
    font_array: bgNumHighArr,
    visible: false,
    show_level: hmUI.show_level.ONLY_NORMAL
};

export const BG_VALUE_TEXT_IMG_BIG = {
    x: px(37),
    y: px(99+6),
    w: px(197),
	h_space: 1,		
    align_h: hmUI.align.CENTER_H,
    dot_image: img('bgBigNum/d.png'),
    font_array: bgBigNumArr,
    visible: false,
    show_level: hmUI.show_level.ONLY_NORMAL
};

export const BG_VALUE_TEXT_IMG_LOW_BIG = {
    x: px(37),
    y: px(99+6),
    w: px(197),
	h_space: 1,		
    align_h: hmUI.align.CENTER_H,
    dot_image: img('bgBigNumLow/d.png'),
    font_array: bgBigNumLowArr,
    visible: false,
    show_level: hmUI.show_level.ONLY_NORMAL
};

export const BG_VALUE_TEXT_IMG_HIGH_BIG = {
    x: px(37),
    y: px(99+6),
    w: px(197),
	h_space: 1,		
    align_h: hmUI.align.CENTER_H,
    dot_image: img('bgBigNumHigh/d.png'),
    font_array: bgBigNumHighArr,
    visible: false,
    show_level: hmUI.show_level.ONLY_NORMAL
};

export const BG_VALUE_TEXT_IMG_BIG_AOD = {
    x: px(12),
    y: px(150+6),
    w: px(150),
    align_h: hmUI.align.CENTER_H,
    dot_image: img('bgBigNumAOD/d.png'),
    font_array: bgBigNumAODArr,
    visible: false,
    h_space:1,
    show_level: hmUI.show_level.ONAL_AOD
};

export const BG_VALUE_TEXT_IMG_LOW_BIG_AOD = {
    x: px(12),
    y: px(150+6),
    w: px(150),
    align_h: hmUI.align.CENTER_H,
    dot_image: img('bgBigNumAODLow/d.png'),
    font_array: bgBigNumAODLowArr,
    visible: false,
    h_space:1,
    show_level: hmUI.show_level.ONAL_AOD
};

export const BG_VALUE_TEXT_IMG_HIGH_BIG_AOD = {
    x: px(12),
    y: px(150+6),
    w: px(150),
    align_h: hmUI.align.CENTER_H,
    dot_image: img('bgBigNumAODHigh/d.png'),
    font_array: bgBigNumAODHighArr,
    visible: false,
    h_space:1,
    show_level: hmUI.show_level.ONAL_AOD
};

export const BG_TIME_TEXT = {
    x: px(187),
    y: px(261+6),
    w: px(80),
    h: px(30),
    color: Colors.defaultTransparent,
    text_size: px(23),
    align_h: hmUI.align.CENTER_H,
    align_v: hmUI.align.TOP,
    text_style: hmUI.text_style.NONE,
    show_level: hmUI.show_level.ONLY_NORMAL
};

export const BG_DELTA_TEXT = {
    x: px(180),
    y: px(225+6),
    w: px(57),
    h: px(41),
    color: Colors.defaultTransparent,
    text_size: px(27),
    align_h: hmUI.align.CENTER_H,
    align_v: hmUI.align.TOP,
    text_style: hmUI.text_style.NONE,
    show_level: hmUI.show_level.ONLY_NORMAL
};

export const BG_TIME_TEXT_AOD = {
    x: px(135),
    y: px(148+6),
    w: px(123),
    color: Colors.defaultTransparent,
    text_size: px(33),
    align_h: hmUI.align.LEFT,
    align_v: hmUI.align.TOP,
    text_style: hmUI.text_style.NONE,
    show_level: hmUI.show_level.ONAL_AOD
};

export const BG_DELTA_TEXT_AOD = {
    x: px(29),
    y: px(148+6),
    w: px(90),
    color: Colors.defaultTransparent,
    text_size: px(40),
    align_h: hmUI.align.RIGHT,
    align_v: hmUI.align.TOP,
    text_style: hmUI.text_style.NONE,
    show_level: hmUI.show_level.ONAL_AOD
};

export const BG_TIME_TEXT_BIG = {
    x: px(146),
    y: px(184+6),
    w: px(100),
    h: px(40),
    color: Colors.defaultTransparent,
    text_size: px(30),
    align_h: hmUI.align.CENTER_H,
    align_v: hmUI.align.TOP,
    text_style: hmUI.text_style.NONE,
    show_level: hmUI.show_level.ONLY_NORMAL
};

export const BG_DELTA_TEXT_BIG = {
    x: px(75),
    y: px(184+6),
    w: px(61),
    h: px(40),
    color: Colors.defaultTransparent,
    text_size: px(30),
    align_h: hmUI.align.CENTER_H,
    align_v: hmUI.align.TOP,
    text_style: hmUI.text_style.NONE,
    show_level: hmUI.show_level.ONLY_NORMAL
};

export const BG_TREND_IMAGE = {
    src: 'watchdrip/arrows/None.png',
    x: px(228),
    y: px(225+6),
    w: px(45),
    h: px(45),
    show_level: hmUI.show_level.ONLY_NORMAL
};

export const BG_TREND_IMAGE_AOD = {
    src: 'watchdrip/arrowsAOD/None.png',
	
    x: px(241),
    y: px(211+6),
    w: px(45),
	align_h: hmUI.align.LEFT,
//    x: px(94+80),
//    y: px(391),
//    w: px(55),
    h: px(45),
    show_level: hmUI.show_level.ONAL_AOD
};

export const BG_TREND_IMAGE_AOD_STAND = {
    src: 'watchdrip/arrowsAOD/None.png',
    x: px(74),
    y: px(360),
    w: px(82),
    h: px(82),
    center_x: 41,
    center_y: 41,
	angle: 90,
    show_level: hmUI.show_level.ONAL_AOD
};


export const BG_TREND_IMAGE_BIG = {
    src: 'watchdrip/arrows/None.png',
    x: px(230),
    y: px(99+6),
    w: px(45),
    h: px(45),
    show_level: hmUI.show_level.ONLY_NORMAL
};

export const BG_TREND_IMAGE_BIG_AOD = {
    src: 'watchdrip/arrowsAOD/None.png',
    x: px(150),
    y: px(145+6),
    w: px(45),
    h: px(45),
    show_level: hmUI.show_level.ONAL_AOD
};

export const BG_STALE_IMG = {
//    x: px(69-45),
//    y: px(135-10),
    x: px(78),
    y: px(261+6),
    src: 'watchdrip/stale.png',
    visible: false,
    show_level: hmUI.show_level.ONLY_NORMAL
};

export const BG_STALE_IMG_BIG = {
//    x: px(69-45),
//    y: px(135-10),
    x: px(37),
    y: px(145+6),
	w: px(197),
    src: 'watchdrip/stale.png',
    visible: false,
    show_level: hmUI.show_level.ONLY_NORMAL
};

export const IMG_LOADING_PROGRESS = {
    x: px(142),
    y: px(240+6),
    src: 'watchdrip/progress.png',
    angle: 0,
    center_x: 20,
    center_y: 20,
    visible: false,
    show_level: hmUI.show_level.ONLY_NORMAL
};

export const IMG_LOADING_PROGRESS_BIG = {
    x: px(112),
    y: px(109+6),
    src: 'watchdrip/progress_big.png',
    angle: 0,
    center_x: 35.5,
    center_y: 35.5,
    visible: false,
    show_level: hmUI.show_level.ONLY_NORMAL
};

export const IMG_STATUS_BT_DISCONNECTED = {
    x: px(33),
    y: px(49+6),
    src: img('status/bt_disconnect.png'),
    type: hmUI.system_status.DISCONNECT,
    show_level: hmUI.show_level.ONLY_NORMAL
};

export const CUSTOM_WIDGETS = {
    NONE: 100001,
    GRAPH: 100011,
    GRAPH_LOW_HIGH_LINES: 100012,
    BIG_BG: 100015
};
// END edit group treatments aaps/xdrip data

// BEGIN edit group default styles
const editWidgetW = 68;
const editWidgetH = 61;
const editWidgetIconHeight = 30;
const editWidgetIconWidth = 30;
const editWidgetIconMargin = 7;
const editWidgetArcRadius = 12;
const editWidgetArcLineWidth = 8;
const editWidgetArcMarginX = 1;
const editWidgetArcMarginTop = -1;

const editGroupTypes = [
    {
        type: CUSTOM_WIDGETS.NONE,
        title_sc: 'None',
        title_tc: 'None',
        title_en: 'None',
        preview: img('widgets/empty.png')
    }
];

const editGroupTypesLarge = editGroupTypes.concat(
    [
        {
            type: CUSTOM_WIDGETS.GRAPH_LOW_HIGH_LINES,
            title_sc: 'xDrip graph low/high lines',
            title_tc: 'xDrip graph low/high lines',
            title_en: 'xDrip graph low/high lines',
            preview: img('widgets/GRAPH_LOW_HIGH_LINES.png')
        },
        {
            type: CUSTOM_WIDGETS.GRAPH,
            title_sc: 'xDrip graph',
            title_tc: 'xDrip graph',
            title_en: 'xDrip graph',
            preview: img('widgets/GRAPH.png')
        },
        {
            type: CUSTOM_WIDGETS.BIG_BG,
            title_sc: 'Big BG values',
            title_tc: 'Big BG values',
            title_en: 'Big BG values',
            preview: img('widgets/BIG.png')
        }		
    ]
);

export const EDIT_GROUP_W_DEFAULTS = {
    x: px(25),
    w: px(270+6),
    h: px(66),
    select_image: img('mask/select-large.png'),
    un_select_image: img('mask/un_select-large.png'),
    optional_types: editGroupTypes,
    count: editGroupTypes.length,
    tips_BG: img('mask/text_tag-wide.png'),
    tips_width: 148,
    tips_margin: 2, // optional, default value: 0
    show_level: hmUI.show_level.ONLY_NORMAL | hmUI.show_level.ONLY_EDIT,
    tips_x: 0,
    tips_y: -45
};

// Default styles for all IMG widgets 
export const EDIT_DEFAULT_IMG = {
    // TODO: make images full width and remove this
    w: px(editWidgetW), // full width to center
    show_level: hmUI.show_level.ONLY_NORMAL
};

// Default styles for all ARC_PROGRESS Left widgets
const EDIT_DEFAULT_ARC_PROGRESS_LEFT = {
    radius: px(editWidgetArcRadius),
    start_angle: 180,
    end_angle: 360,
    color: Colors.accent,
    line_width: editWidgetArcLineWidth,
    show_level: hmUI.show_level.ONLY_NORMAL
};
// Default styles for all ARC_PROGRESS RIGHT widgets
const EDIT_DEFAULT_ARC_PROGRESS_RIGHT = {
    radius: px(editWidgetArcRadius),
    start_angle: 180,
    end_angle: 0,
    color: Colors.accent,
    line_width: editWidgetArcLineWidth,
    show_level: hmUI.show_level.ONLY_NORMAL
};

export const EDIT_DEFAULT_ARC_PROGRESS = {
    left: EDIT_DEFAULT_ARC_PROGRESS_LEFT,
    right: EDIT_DEFAULT_ARC_PROGRESS_RIGHT

};

// Default styles for all TEXT_IMG widgets
export const EDIT_DEFAULT_TEXT_IMG = {
    w: px(editWidgetW),
    padding: false,
    h_space: 1,
    align_h: hmUI.align.CENTER_H,
    show_level: hmUI.show_level.ONLY_NORMAL,
    font_array: smallNumArr,
    dot_image: img('smallNum/d.png'),
    negative_image: img('smallNum/negative_image.png')
};
// END edit group default styles


// BEGIN Top Edit Widgets
const topX = 125;
const topY = 110+6;

export const EDIT_TOP_GROUP = {
    edit_id: 101,
    x: px(topX),
    y: px(topY),
    default_type: hmUI.edit_type.HEART
}; 

// Styles for all Top IMG widgets
export const EDIT_TOP_IMG = {
    x: px(topX),
    y: px(topY)
};

// Styles for all Top ARC_PROGRESS widgets
const EDIT_TOP_ARC_PROGRESS_LEFT = {
    center_x: px(topX + editWidgetArcRadius + editWidgetArcMarginX + (editWidgetArcLineWidth / 2)),
    center_y: px(topY + editWidgetArcRadius + editWidgetArcMarginTop + (editWidgetArcLineWidth / 2))
};
// Styles for all Top ARC_PROGRESS Right widgets
const EDIT_TOP_ARC_PROGRESS_RIGHT = {
    center_x: px(topX + editWidgetArcRadius + (2 * editWidgetArcMarginX) + editWidgetIconWidth + (editWidgetArcLineWidth / 2) + 1),
    center_y: px(topY + editWidgetArcRadius + editWidgetArcMarginTop + (editWidgetArcLineWidth / 2))
};
export const EDIT_TOP_ARC_PROGRESS = {
    left: EDIT_TOP_ARC_PROGRESS_LEFT,
    right: EDIT_TOP_ARC_PROGRESS_RIGHT
};

// Styles for all Top TEXT_IMG widgets
export const EDIT_TOP_TEXT_IMG = {
    x: px(topX),
    y: px(topY + editWidgetIconHeight + editWidgetIconMargin)
};
// END Top Left Edit Widgets


// BEGIN Wide Edit Widgets
const largeX = 66;
const largeY = 285+6;

export const EDIT_GROUP_DEFAULTS = {
    w: px(editWidgetW),
    h: px(editWidgetH),
    select_image: img('mask/select.png'),
    un_select_image: img('mask/un_select.png'),
    optional_types: editGroupTypes,
    count: editGroupTypes.length,
    tips_BG: img('mask/text_tag.png'),
    tips_x: -35,
    tips_y: -45,
    tips_width: 89,
    tips_margin: 1, // optional, default value: 0
    show_level: hmUI.show_level.ONLY_NORMAL | hmUI.show_level.ONLY_EDIT
};

export const EDIT_LARGE_GROUP = {
    edit_id: 112,
    select_image: img('mask/select-large.png'),
    un_select_image: img('mask/un_select-large.png'),
    x: px(25),
    y: px(170+6),
    w: px(270),
    h: px(72),
    optional_types: editGroupTypesLarge,
    count: editGroupTypesLarge.length,
    default_type: CUSTOM_WIDGETS.GRAPH_LOW_HIGH_LINES,
};

// Default styles for all Wide IMG widgets
const LARGE_IMAGE_Y_SHIFT = 37;

export const EDIT_LARGE_IMG = {
    x: px(largeX),
    y: px(largeY + LARGE_IMAGE_Y_SHIFT)
};

// Styles for all Wide ARC_PROGRESS widgets
const EDIT_LARGE_ARC_PROGRESS_LEFT = {
    center_x: px(largeX + editWidgetArcRadius + editWidgetArcMarginX + (editWidgetArcLineWidth / 2)),
    center_y: px(largeY + LARGE_IMAGE_Y_SHIFT + editWidgetArcRadius + editWidgetArcMarginTop + (editWidgetArcLineWidth / 2))
};
// Styles for all Wide ARC_PROGRESS Right widgets
const EDIT_LARGE_ARC_PROGRESS_RIGHT = {
    center_x: px(largeX + editWidgetArcRadius + (2 * editWidgetArcMarginX) + editWidgetIconWidth + (editWidgetArcLineWidth / 2) + 1),
    center_y: px(largeY + LARGE_IMAGE_Y_SHIFT + editWidgetArcRadius + editWidgetArcMarginTop + (editWidgetArcLineWidth / 2))
};
export const EDIT_LARGE_ARC_PROGRESS = {
    left: EDIT_LARGE_ARC_PROGRESS_LEFT,
    right: EDIT_LARGE_ARC_PROGRESS_RIGHT
};

// Styles for all Wide TEXT_IMG widgets
export const EDIT_LARGE_TEXT_IMG = {
    x: px(largeX),
    y: px(largeY)
};
// END Wide Edit Widgets


export const GRAPH_SETTINGS = {
    x: 25,
    y: 100+6,
    w: 270,
    h: 140,
    point_size: 7,
    treatment_point_size: 10,
    line_size: 2
};

// END Edit Widgets

