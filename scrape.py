import requests
from bs4 import BeautifulSoup
import os
from urllib.parse import quote_plus

import time

rose_names = ['Tree Roses', 'Moondance', 'Canadian White Star', 'Walking on Sunshine', 'Violets Pride', 'Icecap', 'Koko Loko', 'Apricots N Cr\xc3\xa8me', 'Grande Dame', 'Sugar Moon', 'Europeana', 'Chihuly', 'Ingrid Bergman', 'Olympiad', 'Autumn Gold', 'Love Song', 'Smokin Hot', 'Montezuma', 'Easy to Please', 'Pat Dando Texas Rose', 'Mother of Pearl', 'Whisper', 'Cinnamon Dolce', 'Lasting Love', 'Marijke Koopman', 'Midas Touch', 'Parade Day', 'Peter Mayle', 'Gold Struck', 'Rainbow Knockout', 'Shockwave', 'Fragrant Cloud', 'Frida Kahlo', 'White Licorice', 'Betty Boop', 'Marmalade Skies', 'Chrysler Imperial', 'Take it Easy', 'Colorific', 'Honey Perfume', 'Queen Elizabeth', 'Doris Day', 'Jump for Joy', 'Strike it Rich', 'Memorial Day', 'Carefree Delight', 'All Dressed Up', 'Hot Cocoa', 'Francis Meilland', 'Various Tree Roses', 'Rainbow Home Run', 'Ketchup and Mustard', 'Love', 'Honor', 'Scentimental', 'Precious Platinum', 'Twilight Zone', 'Iceberg', 'Wild Blue Yonder', 'Rainbow Sorbet', 'Julia Child', 'Cinco de Mayo', 'Sweet Surrender', 'Dee-Lish', 'Secret', 'Dick Clark', 'Sparkle & Shine', 'Life of the Party', 'All Loving', 'Proud Land', 'Mardigras', 'Double Delight', 'Friendship', 'Summer Dream', 'Neptune', 'Home Run', 'Perfect Moment', 'Good as Gold', 'Easy Spirit', 'Stephens Big Purple', 'Happy Go Lucky', 'Test Roses', 'Myles of Smiles', 'Pristine / Trees', 'Color Magic / Trees', 'Cecile Brunner', 'Celebrity', 'Brandy', 'Pretty Lady Rose', 'Ell\xc3\xa9', 'Sheer Elegance', 'Artistry', 'Loeta Ligget', 'Tequila Supreme', 'Pink Promise', 'Passionate Kisses', 'Mr. Lincoln', 'Teasing Georgia', 'Abraham Darby', 'Daydream', 'Drop Dead Red', 'Water Colors', 'Shelias Perfume', 'Love & Peace', 'Paris De Yves St. Laurent', 'Fired-Up!', 'Tangerine Streams', 'Ch-Ching', 'Brass Band', 'Coretta Scott King', 'White Delight', 'Peace', 'Grootendorst Red', 'Julio Iglesias', 'Daybreaker', 'Pink Flamingo', 'Melody Pafum\xc3\xa9e', 'Miss Congeniality', 'Hot Tamale', 'Carefree Spirit', 'Be My Baby', 'Fame!', 'Neil Diamond', 'Crescendo', 'Smooth Lady', 'Nicole', 'Mikado', 'Simplicity', 'Pumpkin Patch', 'Tineke', 'Falling in Love', 'About Face', 'Wing-Ding', 'Gourmet Popcorn', 'Topsy Turvy', 'Best Kept Secret', 'Classic Touch', 'Paradise Found', 'In the Mood', 'Gemini', 'Mercury Rising', 'Impatient', 'Cherry Parfait', 'Limoncello', 'Lady Elsie May', 'Knockout', 'First Light', 'Crimson Bouquet', 'Pink Home Run', 'Carefree Beauty', 'Sunset Celebration', 'Eureka', 'Phloxy Baby', 'Pinkerbelle', 'All That Jazz', 'Bonica']


def download_image(query, filename):
    # Encode the query for URL
    encoded_query = quote_plus(query + " rose")
    
    # Send a GET request to Google Images
    url = f"https://www.google.com/search?q={encoded_query}&tbm=isch"
    response = requests.get(url)

    
    # Parse the HTML content
    soup = BeautifulSoup(response.text, 'html.parser')
    
    # Find the first image
    img_tags = soup.find_all('img')
    img_tag = next((img for img in img_tags if img.get('src') and img['src'].startswith('http')), None)
    
    if img_tag and 'src' in img_tag.attrs:
        img_url = img_tag['src']
        
        # Download the image
        img_data = requests.get(img_url).content
        
        # Save the image
        with open(filename, 'wb') as handler:
            handler.write(img_data)
        print(f"Downloaded: {filename}")
    else:
        print(f"No image found for: {filename}")

if not os.path.exists('rose_images'):
    os.makedirs('rose_images')

for i, rose_name in enumerate(rose_names):
    download_image(rose_name, f"rose_images/{i+1}.jpg")
    time.sleep(0.2)