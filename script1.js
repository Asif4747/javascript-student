function calc()
{
    var m1,m2,m3,avg,total,result="",grade='';
    m1=parseInt(document.form2.sub1.value);
    m2=parseInt(document.form2.sub2.value);
    m3=parseInt(document.form2.sub3.value);
    total=m1+m2+m3;
    avg=Math.round(total/3);
    if(m1<35 || m2<35 ||m3<35)
    {
        result="fail";
        grade="D";
    }
    else if (avg>90)
    {
        result="Distinction";
        grade="A+"
    }
    else if (avg>=75 && avg <=90)
    {
        result="First class"
        grade="A"
    }
    else if (avg>=50 && avg <75)
    {
        result="second class"
        grade="B"
    }
    else if (avg>=35 && avg <50)
    {
        result="third class"
        grade="C"
    }
    document.form2.result.value = result;
    document.form2.grade.value = grade;
    document.form2.total.value = total;
    document.form2.average.value = avg;

}