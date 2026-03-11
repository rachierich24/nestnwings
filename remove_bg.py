from PIL import Image
import os

def remove_white_background(input_path, output_path, tolerance=20):
    """
    Removes white background from an image.
    Pixels close to white (within tolerance) are made transparent.
    """
    try:
        img = Image.open(input_path).convert("RGBA")
        datas = img.getdata()
        
        newData = []
        for item in datas:
            # item is (R, G, B, A)
            # Check if pixel is white or very close to white
            if item[0] >= 255 - tolerance and item[1] >= 255 - tolerance and item[2] >= 255 - tolerance:
                # Change to transparent
                newData.append((255, 255, 255, 0))
            else:
                newData.append(item)
                
        img.putdata(newData)
        
        # Crop the image to remove empty transparent space around the logo
        bbox = img.getbbox()
        if bbox:
            img = img.crop(bbox)
            
        img.save(output_path, "PNG")
        print(f"Successfully processed image and saved to {output_path}")
        return True
    except Exception as e:
        print(f"Error processing image: {e}")
        return False

if __name__ == "__main__":
    input_file = "public/logo.png"
    output_file = "public/logo_transparent.png"
    
    if os.path.exists(input_file):
        remove_white_background(input_file, output_file, tolerance=30)
    else:
        print(f"Error: Could not find {input_file}")
