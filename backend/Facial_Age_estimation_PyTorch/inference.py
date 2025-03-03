import torch
import os
import glob
from PIL import Image, ImageDraw, ImageFont
import torchvision.transforms as T
from .model import AgeEstimationModel

import torchvision.transforms as transforms

config = {
    'img_width': 128,
    'img_height': 128,
    'img_size': 128,
    'mean': [0.485, 0.456, 0.406],
    'std': [0.229, 0.224, 0.225],
    'model_name': 'resnet',
    'root_dir': '',
    'csv_path': '',
    'device': 'cpu',
    'leaky_relu': False,
    'epochs': 2,
    'batch_size': 128,
    'eval_batch_size': 256,
    'seed': 42,
    'lr': 0.0001,
    'wd': 0.001,
    'save_interval': 1,
    'reload_checkpoint': None,
    'finetune': 'weights/FA_DOCS/crnn-fa-base.pt',
    # 'finetune': None,
    'weights_dir': 'weights',
    'log_dir': 'logs',
    'cpu_workers': 4,
}
    
def inference(image_path, output_path= './what/out.png', **kwargs):
    model = AgeEstimationModel(input_dim=3, output_nodes=1, model_name=config['model_name'], pretrain_weights='IMAGENET1K_V2').to(config['device'])
    # Load the model using the latest checkpoint file
    model.load_state_dict(torch.load("C:/Users/admin/Desktop/PRO/Project/smile/backend/Facial_Age_estimation_PyTorch/trained/256.pt", weights_only=True))

    model.eval() 
    with torch.no_grad():
        image=Image.open(f'C:/Users/admin/Desktop/PRO/Project/smile/backend/{image_path}').convert('RGB')
        transform = T.Compose([T.Resize(((config['img_width'], config['img_height']))),
                               T.ToTensor(),
                               T.Normalize(mean=config['mean'], 
                                           std=config['std'])
                              ])
        input_data = transform(image).unsqueeze(0).to(config['device']) 
        outputs = model(input_data)  # Forward pass through the model
        
        # Extract the age estimation value from the output tensor
        age_estimation = outputs.item()
        text = f"{age_estimation:.2f}"  

    return output_path, text, image_path

# path = "./checkpoints/"
# checkpoint_files = glob.glob(os.path.join(path, 'epoch-*-loss_valid-*.pt'))
# latest_checkpoint = max(checkpoint_files, key=os.path.getctime)
