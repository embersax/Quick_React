import { Button } from "rbx";
import React from "react";
import { getCourseTerm, hasConflict, getCourseNumber, timeParts } from "./times";
import { db } from "./index";

const saveCourse = (course, meets) => {
    db.child('courses').child(course.id).update({ meets })
        .catch(error => alert(error));
};

const moveCourse = course => {
    const meets = prompt('Enter new meeting data, in this format:', course.meets);
    if (!meets) return;
    const { days } = timeParts(meets);
    if (days) saveCourse(course, meets);
    else moveCourse(course);
};

export const buttonColor = selected => (
    selected ? 'success' : null
)

const Course = ({ course, state, user }) => (
    <Button
        data-cy="course"
        color={buttonColor(state.selected.includes(course))}
        onClick={() => state.toggle(course)}
        onDoubleClick={user ? () => moveCourse(course) : null}
        disabled={hasConflict(course, state.selected)}

    >
        {getCourseTerm(course)} CS {getCourseNumber(course)}: {course.title}
    </Button>
);

export default Course;
