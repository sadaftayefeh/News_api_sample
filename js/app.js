//class

const ui = new UI

const news = new NEWS




//variables

const submitBtn = document.querySelector('#submitBtn')

//eventlisteners

eventlisteners()

function eventlisteners() {

    submitBtn.addEventListener('click', function (e) {
        e.preventDefault()

        const newsName = document.querySelector('#news-name').value
        const country = document.querySelector('#country').value
        const category = document.querySelector('#category').value

        if (newsName !== "" || country !== "" || category !== "") {

            news.APIquery(newsName, country, category)
                .then(news => {
                    const newsArray = news.news.articles
                    if (newsArray.length > 0) {

                        ui.showNews(newsArray)

                    } else {
                        ui.printMessage('there is no news in this field', 'alert alert-danger mt-4 text-center')

                    }
                })

        } else {
            ui.printMessage('Please Fill at least one Field', 'alert alert-danger mt-4 text-center')

        }

    })
}


//function