const element_to_flower_map = {
    6: 93, 51: 94, 87: 95, 142: 96,
174: 97, 7: 98, 37: 100, 41: 101, 52: 102, 62: 103, 73: 104, 88: 105, 109: 106, 115: 107, 124: 108, 143: 109, 159: 110, 168: 111,
175: 112, 8: 113, 23: 114, 38: 115, 42: 116, 53: 117, 63: 118, 74: 119, 77: 120, 94: 121, 110: 122, 116: 123, 125: 124, 144: 125, 160: 44, 166: 126, 169: 127,
176: 9, 9: 128, 24: 129, 39: 130, 43: 131, 54: 59, 64: 132, 75: 133, 78: 134, 95: 135, 111: 136, 117: 137, 126: 138, 145: 139, 161: 140, 167: 141, 170: 58,
177: 142, 10: 143, 40: 144, 44: 145, 55: 146, 65: 147, 76: 97, 89: 10, 112: 148, 118: 149, 127: 150, 146: 151, 162: 152, 171: 153,
178: 154,
14: 3, 47: 12, 68: 17, 103: 26, 120: 35, 147: 40,
15: 4, 59: 18, 104: 27, 128: 41,
16: 5, 48: 13, 66: 19, 105: 28, 123: 36, 148: 42,
17: 6, 60: 20, 106: 29, 129: 43,
18: 7, 58: 14, 71: 21, 107: 30, 130: 44,
19: 8, 49: 15, 67: 22, 108: 31, 121: 37, 149: 45,
20: 9, 61: 23, 96: 32, 131: 46,
21: 10, 50: 16, 72: 25, 97: 33, 122: 38, 150: 47,
22: 11, 98: 34, 119: 39, 151: 48,
4: 1, 5: 2, 172: 1, 173: 49,
0: 155, 2: 156, 3: 156, 1: 155,
11: 50, 12: 51, 13: 52,
132: 77, 133: 78, 134: 79, 135: 80, 136: 81, 137: 81, 138: 82, 139: 82, 140: 82, 141: 82, 153: 84, 154: 85, 152: 86, 155: 86, 156: 82, 157: 82, 158: 82, 163: 83, 164: 82, 165: 66,
25: 53, 26: 55, 31: 56, 32: 57, 33: 11, 34: 58, 27: 59, 28: 60, 29: 61, 30: 62,
113: 69, 102: 71, 99: 72, 90: 73, 85: 58, 86: 11, 91: 74, 100: 76, 101: 9, 114: 58,
35: 63, 45: 65, 70: 66, 80: 61, 93: 68, 81: 27, 82: 67, 57: 67,
36: 5, 46: 74, 69: 78, 84: 89, 92: 91, 83: 92, 79: 88, 56: 87,
};

const rose_names = ['Tree Roses', 'Moondance', 'Canadian White Star', 'Walking on Sunshine', 'Violets Pride', 'Icecap', 'Koko Loko', 'Apricots N Cr\xc3\xa8me', 'Grande Dame', 'Sugar Moon', 'Europeana', 'Chihuly', 'Ingrid Bergman', 'Olympiad', 'Autumn Gold', 'Love Song', 'Smokin Hot', 'Montezuma', 'Easy to Please', 'Pat Dando Texas Rose', 'Mother of Pearl', 'Whisper', 'Cinnamon Dolce', 'Lasting Love', 'Marijke Koopman', 'Midas Touch', 'Parade Day', 'Peter Mayle', 'Gold Struck', 'Rainbow Knockout', 'Shockwave', 'Fragrant Cloud', 'Frida Kahlo', 'White Licorice', 'Betty Boop', 'Marmalade Skies', 'Chrysler Imperial', 'Take it Easy', 'Colorific', 'Honey Perfume', 'Queen Elizabeth', 'Doris Day', 'Jump for Joy', 'Strike it Rich', 'Memorial Day', 'Carefree Delight', 'All Dressed Up', 'Hot Cocoa', 'Francis Meilland', 'Various Tree Roses', 'Rainbow Home Run', 'Ketchup and Mustard', 'Love', 'Honor', 'Scentimental', 'Precious Platinum', 'Twilight Zone', 'Iceberg', 'Wild Blue Yonder', 'Rainbow Sorbet', 'Julia Child', 'Cinco de Mayo', 'Sweet Surrender', 'Dee-Lish', 'Secret', 'Dick Clark', 'Sparkle & Shine', 'Life of the Party', 'All Loving', 'Proud Land', 'Mardigras', 'Double Delight', 'Friendship', 'Summer Dream', 'Neptune', 'Home Run', 'Perfect Moment', 'Good as Gold', 'Easy Spirit', 'Stephens Big Purple', 'Happy Go Lucky', 'Test Roses', 'Myles of Smiles', 'Pristine / Trees', 'Color Magic / Trees', 'Cecile Brunner', 'Celebrity', 'Brandy', 'Pretty Lady Rose', 'Ell\xc3\xa9', 'Sheer Elegance', 'Artistry', 'Loeta Ligget', 'Tequila Supreme', 'Pink Promise', 'Passionate Kisses', 'Mr. Lincoln', 'Teasing Georgia', 'Abraham Darby', 'Daydream', 'Drop Dead Red', 'Water Colors', 'Shelias Perfume', 'Love & Peace', 'Paris De Yves St. Laurent', 'Fired-Up!', 'Tangerine Streams', 'Ch-Ching', 'Brass Band', 'Coretta Scott King', 'White Delight', 'Peace', 'Grootendorst Red', 'Julio Iglesias', 'Daybreaker', 'Pink Flamingo', 'Melody Pafum\xc3\xa9e', 'Miss Congeniality', 'Hot Tamale', 'Carefree Spirit', 'Be My Baby', 'Fame!', 'Neil Diamond', 'Crescendo', 'Smooth Lady', 'Nicole', 'Mikado', 'Simplicity', 'Pumpkin Patch', 'Tineke', 'Falling in Love', 'About Face', 'Wing-Ding', 'Gourmet Popcorn', 'Topsy Turvy', 'Best Kept Secret', 'Classic Touch', 'Paradise Found', 'In the Mood', 'Gemini', 'Mercury Rising', 'Impatient', 'Cherry Parfait', 'Limoncello', 'Lady Elsie May', 'Knockout', 'First Light', 'Crimson Bouquet', 'Pink Home Run', 'Carefree Beauty', 'Sunset Celebration', 'Eureka', 'Phloxy Baby', 'Pinkerbelle', 'All That Jazz', 'Bonica'];


document.addEventListener('DOMContentLoaded', function() {
    const svgDoc = document.getElementById('svgObject');

    function handleSVGLoad() {
        const svgElements = svgDoc.querySelectorAll('path, polygon, rect, circle, ellipse');
        let hoverContainer = null;

        svgElements.forEach((element, index) => {
            element.addEventListener('mouseenter', () => {
                element.style.stroke = 'yellow';
                element.style.strokeWidth = '5';
                console.log(index);

                // Create container for image and text
                hoverContainer = document.createElement('div');
                hoverContainer.style.position = 'absolute';
                hoverContainer.style.zIndex = '1000';
                hoverContainer.style.left = '50%';
                hoverContainer.style.top = '50%';
                hoverContainer.style.transform = 'translate(-50%, -50%)';
                hoverContainer.style.textAlign = 'center';

                // Create and display the hover image
                const hoverImage = document.createElement('img');
                hoverImage.src = `rose_images/${element_to_flower_map[index]}.jpg`;
                hoverImage.style.width = '105%'; // Adjust size as needed
                hoverImage.style.height = 'auto';
                hoverContainer.appendChild(hoverImage);

                // Add flower name
                const flowerName = document.createElement('p');
                flowerName.textContent = rose_names[element_to_flower_map[index] - 1]; // Adjust index if needed
                flowerName.style.margin = '5px 0 0 0';
                flowerName.style.fontWeight = 'bold';
                hoverContainer.appendChild(flowerName);

                document.body.appendChild(hoverContainer);
            });

            element.addEventListener('mouseleave', () => {
                element.style.stroke = '';
                element.style.strokeWidth = '';

                // Remove the hover container
                if (hoverContainer) {
                    document.body.removeChild(hoverContainer);
                    hoverContainer = null;
                }
            });
        });
    }

    // Check if SVG is already loaded
    if (svgObject.contentDocument && svgObject.contentDocument.readyState === 'complete') {
        handleSVGLoad();
    } else {
        svgObject.addEventListener('load', handleSVGLoad);
    }
});