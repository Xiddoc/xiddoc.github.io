from PIL import Image
filename = 'favicon.png'
img = Image.open(filename)
img.save('favicon.ico', sizes=[(255, 255)])