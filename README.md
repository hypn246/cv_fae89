# Facial Age Estimation - ResNet50

## I'll be honest. This project's model made by Ebimsv and this is the link and his clone in Facial_Age_estimation. However, I customized some of them and wrote some new too, especialy intergrate this model with webcam.
Model: https://github.com/Ebimsv/Facial_Age_estimation_PyTorch
Thanks this giga-chad for this repo with a star

### This web project made by me-Hypn on August, 3rd 2024 during the SIC campus along with team leader-TM.Hiếu for translate python code for model training and testing into notebook format. Special thanks to a.Hiếu for being a team's hypercarry. Without you, no model can be created. 

His notebook: https://www.kaggle.com/code/himhtrinh/facial-age-estimation-ai-class-nhom3-studying

##### A message for old remain members. I know you will nerver check my report and you better won't. Fuck you who have done nothing for this. 2 of us carry 4 bastard with no uses, push all tasks to a fresher and we didn't even have a thanks. So yeah, fuck you.

![alt text](./AI%20Templates%20for%20Capstone%20Project/Screenshot%20(534).png)

### Before running
- Make sure you install Django with
    'rest_framework',
    'corsheaders',
    'Facial_Age_estimation_PyTorch',
    'Age'
- Create .env file in backend with SECRET_KEY (but this is for fun, don't mention it)
- This project won't run with empty model which couldn't upload because the size, so download it from author or train it yourself.

### Run backend:
This project use sqlite3 so you don't have to use any sql server, very convinient.
`cd backend`-> `py manage.py runserver`

### Run frontend:

`cd frontend`-> `npm run dev`

To use model, use `from inference import inference` in backend views. Parameter of that function consist of *image_path, output_path= default value'* and *kwargs*. This is for my testing purpose, so that the **kwargs** and **output** are change to any of output in server. However the return include *output_path, text, image_path*. Meanwhile the **text** indicates the result of model's prediction and **image_path** is use for render user image in frontend, the **output_path is actually useless**.

For the best testing, I'd recommend create a test.ipynb and run on it.

This project also have a file where you and test this model with webcam in `.\backend\Facial_Age_estimation_PyTorch\face_cam.ipynb`, don't forget to change the path of the model.
![alt text](./AI%20Templates%20for%20Capstone%20Project/hih.png)

Happy coding!