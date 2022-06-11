class NEWS {
    constructor() {
        this.keyAPI = '0a2b25c042c54b35b12026c2d3b4343a'
    }


    async APIquery(newsName, country, category) {

        //Build the URL
        let url = 'https://newsapi.org/v2/'

        if (country == "" && category == "") {

            ulr += 'eveything?'

        } else {

            url += 'top-headlines?'

        }
        if (newsName !== "") {
            url += `q=${newsName}`

        }
        if (country !== "") {

            url += `country=${country}`

        }
        if (category !== "") {
            url += `&category=${category}`
        }

        url += `&apiKey=${this.keyAPI}`

        const newsResponse = await fetch(url)
        const news = await newsResponse.json()
        return {
            news
        }




    }
}