var month = prompt('Введите ваш месяц рождения')
var day = prompt('Введите ваш день рождения')
var sign = 'Ваш знак зодиака-'
if ((month === 'март' && day>=21 && day<=31)|| (month === 'апрель' && day>=1 && day<=27)){
    console.log(sign+'овен')
} else if ((month === 'апрель' && day>=21 && day<=30)|| (month === 'май' && day>=1 && day<=21)){
    console.log(sign+'телец')
} else if ((month === 'май' && day>=22 && day<=30)|| (month === 'июнь' && day>=1 && day<=21)){
    console.log(sign+'близнецы')
} else if ((month === 'июнь' && day>=22 && day<=30)|| (month === 'июль' && day>=1 && day<=22)){
    console.log(sign+'рак')
} else if ((month === 'июль' && day>=23 && day<=31)|| (month === 'август' && day>=1 && day<=23)){
    console.log(sign+'лев')
} else if ((month === 'август' && day>=24 && day<=31)|| (month === 'сентябрь' && day>=1 && day<=23)){
    console.log(sign+'дева')
} else if ((month === 'сентябрь' && day>=24 && day<=30)|| (month === 'октябрь' && day>=1 && day<=23)){
    console.log(sign+'весы')
} else if ((month === 'октябрь' && day>=24 && day<=31)|| (month === 'ноябрь' && day>=1 && day<=22)){
    console.log(sign+'скорпион')
} else if ((month === 'ноябрь' && day>=23 && day<=30)|| (month === 'декабрь' && day>=1 && day<=22)){
    console.log(sign+'стрелец')
} else if ((month === 'декабрь' && day>=23 && day<=30)|| (month === 'январь' && day>=1 && day<=22)){
    console.log(sign+'стрелец')
} else if ((month === 'январь' && day>=21 && day<=31)|| (month === 'февраль' && day>=1 && day<=20)){
    console.log(sign+'козерог')
} else if ((month === 'февраль' && day>=21 && day<=29)|| (month === 'март' && day>=1 && day<=21)){
    console.log(sign+'водолей')
} else  {
    console.error('ошибка при вводе данных')
}
