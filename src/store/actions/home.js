import * as Types from './../types';

let actions = {
    // 选择当前课程
    updateCurrentLesson(currentLesson) {
        return {type: Types.SET_CURRENT_LESSON, currentLesson}
    }
}

export default actions;