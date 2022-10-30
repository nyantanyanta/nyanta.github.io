@charset "UTF-8";
/* reseet */
html {
    font-size: 100%;
}

img {
    max-width: 100%;
    vertical-align: bottom;
}
ul {
    list-style: none;
}

.content {
    width: 100%;
    padding: 60px 30px 0 30px;
}

#slider {
    max-width: 1000px;
    margin: 0 auto;
}

#slider .slick-next:before,
#slider .slick-prev:before {
    color: #000;
}

body {
    background-color: #f2f2f2;
    color: #333;
    font-size: 0.875rem;
}

.wrapper {
    max-width: 1000px;
    padding: 60px 10px;
    margin: 0 auto;
}

.title {
    text-align: center;
    margin-bottom: 30px;
}

.form-area {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 15px;
}
.form-area dt {
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #3d546a;
    color: #fff;
    padding: 30px 15px;
    margin-bottom: 2px;
}
.form-area dt span {
    background-color: #fff;
    color: #e85c4e;
    font-size: 0.75rem;
    padding: 0 8px;
}
.form-area dd {
    width: 70%;
    background-color: #fff;
    padding: 22px 15px 20px 15px;
    margin-bottom: 2px;
}
.form-area input {
    background-color: #f2f2f2;
    padding: 8px 10px;
}
.button-area {
    text-align: center;
}
#submit-button {
    background-color: #e85c4e;
    border-radius: 5px;
    color: #fff;
    font-size: 1.25rem;
    font-weight: bold;
    padding: 20px 40px;
    text-align: center;
}
#submit-button:hover {
    opacity: 0.7;
}
#name {
    width: 100%;
}

#tel1,
#tel2,
#tel3 {
    max-width: 80px;
}
#reservation {
    max-width: 200px;
}
.lesson {
    margin-right: 5px;
    position: relative;
    top: 2px;
}
.lesson:first-child {
    margin-bottom: 10px
}
.note-online,
.note-venue {
    padding: 0 30px;
    margin-bottom: 30px;
}
.note-venue {
    display: none;
}
.error-text {
    color: #de3f2e;
    margin-top: 2px;
}

@media screen and (max-width :600px) {
    .form-area {
        flex-direction: column;
    }

    .form-area dt {
        width: 100%;
        display: block;
        padding: 10px;
        margin-bottom: 0;
    }

    .form-area dt span {
        margin-left: 10px;
    }
    .form-area dd {
        width: 100%;
        padding: 10px;
        margin-bottom: 10px;
    }
    .form-area dd:last-child {
        margin-bottom: 0;
    }
    .note-online,
    .note-venue {
        padding: 0 10px;
    }
}
