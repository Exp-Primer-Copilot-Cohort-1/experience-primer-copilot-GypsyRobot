function skillsMember() {
    var member = {
        name: "John",
        age: 30,
        skills: ["js", "html", "css"],
        salary: 2000,
        bonus: 100,
        addSkill: function (newSkill) {
            this.skills.push(newSkill);
        },
        getSalary: function () {
            return this.salary + this.bonus;
        }
    };
    member.addSkill("php");
    console.log(member.skills);
    console.log(member.getSalary());
}