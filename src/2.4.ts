{
    // generic with interface 

    interface Developer <T> {
        name: string;
        computer: {
            brand : string,
            model: string,
            releaseYear: number
        }
        smartWatch : T;
    }


    type Watch = {
        brand: string,
        model: string,
        display: string
    }

    const poorDeveloper : Developer <Watch>
 = {
    name: 'farhan',
    computer : {
        brand: 'Walton',
        releaseYear: 2013,
        model:'lsefg'
    },
    smartWatch : {
        brand: 'Rolex',
        model: 'skb',
        display : 'OLED'
    }
 }
    const richDeveloper : Developer  <{
        brand: string,
        model: string,
        display : string,
        heartTrack : boolean,
        sleepTrack : boolean,
    }>
 = {
    name: 'farhan',
    computer : {
        brand: 'Daalton',
        releaseYear: 2015,
        model:'lseskuefhfg'
    },
    smartWatch : {
        brand: 'Rolexxxxx',
        model: 'skbskudg',
        display : '4K',
        heartTrack : true,
        sleepTrack : true
    }
 }



}