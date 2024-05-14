class Activity {
  constructor(id, title, description, imgUrl) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imgUrl = imgUrl;
  }
}

class Repository{
    constructor(){
        this.activities= []

    }
    getAllActivities(){
        return this.activities

    }
    createActivity(){
       
        let aux=  new Activity(
            1, "titl1", "desc1", "img1"
        )
        this.activities.push(aux)
    }
}