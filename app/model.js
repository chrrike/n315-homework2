//This is my model and it handles all the service calls

function setCurrentPageContent(pageID){
    let contentName = pageID + "Content";
    $("#app").html(eval(contentName));
}

var homeContent = `<div class="header">
            <div class="title">Nova <br> Photography</div>
        </div>
        <div class="home-content">
            <div class="home-text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique molestias, impedit omnis tempora temporibus neque esse ex ea nam tenetur, vitae sunt libero praesentium eius quas consequatur odio molestiae error nihil iure voluptatem nulla ratione optio porro? Totam in dolorem magnam temporibus! Porro culpa, unde officiis architecto magni vel quos ab reiciendis, aliquid quod quae!</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod saepe, voluptatem delectus quidem iure corporis qui neque quibusdam. Quos veritatis eius eligendi necessitatibus praesentium accusamus, saepe aperiam blanditiis obcaecati vel quia assumenda nihil maxime officiis? Consectetur quis ullam aliquid repellat mollitia blanditiis illum ea, neque nesciunt, maiores a consequatur accusantium! Rem blanditiis delectus earum! Velit autem sapiente dignissimos cupiditate quae esse voluptatem, explicabo non voluptatibus, ea amet. Ullam minus, et, nulla dolores provident iusto totam, aspernatur earum aliquid molestiae maxime natus repellendus. Illum!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat voluptates illo sequi dolorum ullam, explicabo vitae maxime laborum sunt impedit nobis eaque nemo porro a dolor iure reprehenderit, molestias fugit, eos tempore! Accusantium modi praesentium ullam officia tempora nesciunt libero perspiciatis a eius tenetur!</p>
            </div>
        </div>`

var aboutContent = `<div class="bio">

        <div class="bio-photo"><img src="images/photographer.jpg" alt="Photographer"></div>
                <div class="bio-name">Who Are We?</div>
        <div class="bio-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate provident neque quidem ratione placeat? Vel qui
        deleniti, sit voluptatum hic nisi illo ipsum tenetur quas delectus excepturi nam earum optio rerum officia nemo
        veritatis, assumenda voluptate omnis. Esse in ipsam eum dolores cupiditate unde, incidunt repellendus asperiores harum,
        ex error sapiente nesciunt fugiat eaque. Iure maxime ad delectus eius reprehenderit unde! Amet corporis, unde odit nobis
        voluptatum obcaecati facere at nemo non reiciendis quibusdam ducimus perferendis.</div>
       </div>
       <div class="history">

        <div class="history-photo"><img src="images/camera.jpg" alt="Camera"></div>
                <div class="history-name">Our History</div>
        <div class="history-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate provident neque quidem ratione placeat? Vel qui deleniti, sit voluptatum hic nisi illo ipsum tenetur quas delectus excepturi nam earum optio rerum officia nemo veritatis, assumenda voluptate omnis. Esse in ipsam eum dolores cupiditate unde, incidunt repellendus asperiores harum, ex error sapiente nesciunt fugiat eaque. Iure maxime ad delectus eius reprehenderit unde! Amet corporis, unde odit nobis voluptatum obcaecati facere at nemo non reiciendis quibusdam ducimus perferendis. Et, provident asperiores modi nobis illum ipsam non vel temporibus neque nam? Deserunt rerum amet totam veniam odit tempore, et odio est quas nulla. <br> <br> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus magnam praesentium, iure quod sapiente dolores exercitationem ipsam minus facere eaque autem voluptatibus sunt ducimus. Deleniti quia culpa veritatis doloremque mollitia quis. Culpa expedita eveniet vero numquam modi ad architecto. Unde quo officiis animi exercitationem, neque dignissimos, fugiat quaerat reiciendis voluptate voluptates maxime soluta deleniti accusamus vitae dolorum, obcaecati rem. Aliquam iusto dolores cum ducimus sapiente odit possimus ad officiis fuga.</div>
       </div>`

var galleryContent = `<div class="gallery">
            <div class="gallery-row">
                <div class="img-1">
                    <img src="images/img1.jpg" alt="one">
                </div>
                <div class="img-2">
                    <img src="images/img2.jpg" alt="two">
                </div>
                <div class="img-3">
                    <img src="images/img3.webp" alt="three">
                </div>
            </div>
            <div class="gallery-row">
                <div class="img-1">
                    <img src="images/img4.webp" alt="four">
                </div>
                <div class="img-2">
                    <img src="images/img5.jpg" alt="five">
                </div>
                <div class="img-3">
                    <img src="images/img6.jpg" alt="six">
                </div>
            </div>
        </div>
       `

var contactContent = ` <h3>Looking to schedule a photoshoot?</h3>
        <p>Send us a message and we'll get back to you.</p>
        <contactForm>
            <form>
                <input type="text" placeholder="First Name">
                <input type="text" placeholder="Last Name">
                <input type="text" placeholder="Email">
                <input type="textarea" placeholder="Tell us about what you're looking for!">
                <input type="button" value="Submit">
            </form>
        </contactForm>`

export {setCurrentPageContent};