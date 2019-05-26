function solve(examPoints, homeworkCompleted, totalHomework) {
    let bonusPoints = homeworkCompleted * 10 / totalHomework;
    examPoints = Number(((examPoints * 100 / 400) * 90) / 100 + bonusPoints);
    let grade = (3 + 2 * (examPoints - 100 / 5) / (100 / 2));
    if (grade < 3) {
        grade = 2;
    } else if (grade > 6) {
        grade = 6;
    }
    console.log(grade.toFixed(2));
}