<template>
    <div class="windows">
        <div class="window-title">
            <h1>&lt;Новости&gt;</h1>
        </div>
        
        <div class="windows-blocks">
            <div class="window-inform">
                <div class="inform-main">
                    <div class="main-image">
                        <img src="../assets/image/image_in_news.svg" alt="test image" style="width:100%">
                    </div>
                    <div class="main-title">
                        <h2>Заголовок</h2>
                    </div>
                    <div class="main-text">
                        <p>Lorem Ipsum - это текст-”рыба”, часто используемый в печати и веб-дизайне. Lorem Ipsum является стандартной “рыбой”.</p>
                    </div>
                    <div class="main-date">
                        <time datetime="18.03.2024">18.03.2024</time>
                    </div>
                    <div class="more-info-button">
                  <button class="form form-button" onclick="document.location='/News'">Узнать подробнее</button>
                </div>
                </div>
            </div>

            <div class="window-inform">
                <div class="inform-main">
                    <div class="main-image">
                        <img src="../assets/image/image_in_news.svg" alt="test image" style="width:100%">
                    </div>
                    <div class="main-title">
                        <h2>Заголовок</h2>
                    </div>
                    <div class="main-text">
                        <p>Lorem Ipsum - это текст-”рыба”, часто используемый в печати и веб-дизайне. Lorem Ipsum является стандартной “рыбой”.</p>
                    </div>
                    <div class="main-date">
                        <time datetime="18.03.2024">18.03.2024</time>
                    </div>
                    <div class="more-info-button">
                  <button class="form form-button" onclick="document.location='/News'">Узнать подробнее</button>
                </div>
                </div>
            </div>

            <div class="window-inform">
                <div class="inform-main">
                    <div class="main-image">
                        <img src="../assets/image/image_in_news.svg" alt="test image" style="width:100%">
                    </div>
                    <div class="main-title">
                        <h2>Заголовок</h2>
                    </div>
                    <div class="main-text">
                        <p>Lorem Ipsum - это текст-”рыба”, часто используемый в печати и веб-дизайне. Lorem Ipsum является стандартной “рыбой”.</p>
                    </div>
                    <div class="main-date">
                        <time datetime="18.03.2024">18.03.2024</time>
                    </div>
                    <div class="more-info-button">
                  <button class="form form-button" onclick="document.location='/News">Узнать подробнее</button>
                </div>
                </div>
            </div>
        </div>
        
  </div>
</template>

<script>

export default {
    name: 'News'
}
</script>

<style scoped>
.windows {
    display: flex;
    flex-direction: column;
    row-gap: 5dvh;
    width: 96dvw;
    margin: 0 2dvw;
}
.window-title {
    padding-top: 4dvh;
}
.window-title h1 {
    font-size: 3rem;
}
.windows-blocks {
    display: flex;
    flex-direction: row;
    column-gap: 3dvw;
}
.window-inform {
    display: flex;
    flex-direction: column;
    background-color: #2D2E37;
    /* height: auto; */
    width: 30dvw;
    justify-content: center;
    align-items: center;
}
.inform-main {
    height: auto;
    width: 26dvw;
    background-color: #000000;
    color: #fff;
}
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 5dvh;
  padding-bottom: 5dvh;
}
h1 {
  padding-bottom: 5dvh;
}
.form-input {
  padding: 1dvh 1dvw;
  margin: 2dvh auto;
  width: 20dvw;
  color: #000;
  background-color: #D9D9D9;
  border: 1px solid #000;
  border-radius: 8px;
}
.form-button {
  margin: 1dvh 0;
  padding: 1dvh 1dvw;
  background-color: #402FFF;
  border: #1b1c21 1px solid;
  border-radius: 8px;
  color: #fff;
  width: 100%;
}
.form-button:hover {
  background-color: #1b1c21;
  color: #fff;
}
.text a{
  color: #000;
}
.text a:hover {
  color: #402FFF;
}

</style>
