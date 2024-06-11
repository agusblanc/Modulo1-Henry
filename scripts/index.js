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
    createActivity(title, description, imgUrl){
        const id = this.activities.length + 1;
       const actividad = new Activity(id, title, description, imgUrl);
       this.activities.push(actividad)
        
    }
}

const repository= new Repository();


const buildActivity = (Activity) =>{

  const{ id, title, description, imgUrl} = Activity;
  
 const titleElement = documeny.createElement ('h3');
const imageElement = document.createElement('img');
const descriptionElement = document.createElement('p');

titleElement.textContent = title;
imageElement.src = imgUrl;
descriptionElement.textContent = description;

containerCard.appenChild(titleElement);
containerCard.appenChild(imageElement);
containerCard.appenChild(descriptionElement);

}
