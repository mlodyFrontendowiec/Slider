const counter = 0;
class Slider {
    constructor() {
        this.activeElement = 0;
        this.leftArrow = document.querySelector(".left-chevron");
        this.rightArrow = document.querySelector(".right-chevron");
        this.data = {
            photos: [{
                    img: "img/img1.jpg",
                },
                {
                    img: "img/img2.jpg",
                },
                {
                    img: "img/img3.jpg",
                },
                {
                    img: "img/img4.jpg",
                },
                {
                    img: "img/img5.jpg",
                },
            ],
            disabled: false,
        };
        this.img = document.querySelector("img");
        this.handleClickLeft();
        this.handleClickRight();
        this.setActualImage();
        this.changeSlideOnClick();
    }
    handleClickRight = () => {
        this.rightArrow.addEventListener("click", () => {
            this.addEventRight();
            this.changeDisable();
            this.setActualImage();
        });
    };
    handleClickLeft() {
        this.leftArrow.addEventListener("click", () => {
            this.addEventLeft();
            this.changeDisable();
            this.setActualImage();
        });
    }
    changeDisable() {
        if (this.activeElement === 0) {
            this.leftArrow.disabled = true;
        } else if (this.activeElement === 4) {
            this.rightArrow.disabled = true;
        } else {
            this.leftArrow.disabled = false;
            this.rightArrow.disabled = false;
        }
    }
    addEventLeft() {
        if (this.activeElement > 0) {
            this.activeElement -= 1;
            this.img.src = this.data.photos[this.activeElement].img;
        }
    }
    addEventRight() {
        if (this.activeElement < 4) {
            this.activeElement += 1;
            this.img.src = this.data.photos[this.activeElement].img;
            console.log(this.activeElement);
        }
    }
    setActualImage() {
        const span = document.querySelector("span.actual-slide");
        span.textContent = this.activeElement + 1;
    }
    changeSlideOnClick() {
        document.body.addEventListener("keydown", (e) => {
            if (e.keyCode === 39) {
                this.addEventRight();
                this.changeDisable();
                this.setActualImage();
            } else if (e.keyCode === 37) {
                this.addEventLeft();
                this.changeDisable();
                this.setActualImage();
            }
        });
    }
}
const slide = new Slider();