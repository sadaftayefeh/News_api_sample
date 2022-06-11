class UI {
    constructor() {
        this.result = document.querySelector('#result')
    }

    //showint the message for filling the form compeletely

    printMessage(message, className) {


        //creating div for appending to the html

        const div = document.createElement('div')
        div.appendChild(document.createTextNode(message))

        //appending classes to the div
        div.className = className

        //appending div to the html
        const messageDanger = document.querySelector('#message')
        messageDanger.appendChild(div)

        //removing the message

        setTimeout(() => {

            this.removeMessage()

        }, 3000);

    }

    removeMessage() {


        const alert = document.querySelector('.alert')
        if (alert) {

            alert.remove()
        }


    }
    //showing the news
    showNews(news) {
        console.log(news)

        news.forEach(newsInfo => {

            this.result.innerHTML +=
                `
            <div class="card col-md-4 mb-4">
  <div class="card-body text-center  justify-content-center ">
    <h2 class="card-title ">${newsInfo.title.split("-",1)}</h2>
    <p class="card-text lead textto-info">${newsInfo.description}</p>
    <a href="${newsInfo.url}" target="_blank class="btn btn-primary">More Here</a>
  </div>
</div>
            `

        });

    }

}