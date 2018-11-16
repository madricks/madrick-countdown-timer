# Madrick Countdown Timer
Simple javascript function to make a countdown timer

[Github repository!](https://github.com/madricks/madrick-countdown-timer)

## Getting Started

### Installing

Using npm:
```
npm i madrick-countdown-timer
```

In angular.component.ts:
```typescript
import mct from 'madrick-countdown-timer';

...

countdown = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,

    status: 0,
    message: ''
};

...

ngOnInit() {
    // params[1] = string date and time
    // params[2] = callback function
    // params[3] = options, see table documentation bellow
    mct.countdown('Jan 5, 2019 13:47:25', (countdown) => {
        // countdown = { 
        //   days, hours, minutes, seconds,
        //   status [0 -> expired / 1 -> counting],
        //   message ['EXPIRED' / 'COUNTING']
        // }

        this.countdown = countdown;
    }, { format: 'dhms' });
}
```

In angular.component.html
```typescript
{{countdown.days}}d - {{countdown.hours}}h - {{countdown.minutes}}m - {{countdown.seconds}}s
```

### Options
| Options | Values                                                                                                       |
|---------|--------------------------------------------------------------------------------------------------------------|
| format  | **'dhms'** => X days, 24 hours, 60 minutes, 60 seconds *(default)*<br>**'hms'** => 0 day, X hours, 60 minutes, 60 seconds |