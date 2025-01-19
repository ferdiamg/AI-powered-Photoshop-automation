# AI-Powered Photoshop Automation for Viral Social Media Carousel Posts

Learn how to use this project with the full tutorial: [Watch on YouTube](https://youtu.be/4buHFbngWWc) 📺  

Quickly create eye-catching carousel posts using AI and Photoshop automation. This project streamlines the process from finding viral Reddit content to generating export-ready images.

**Important Note:** This method works as of **January 2025**. If Reddit changes its post structure or `.json` availability in the future, you may need to adapt or find alternative methods for content curation.

## 📖 How to Use

1. **Find a Viral Reddit Post**
   - Locate a popular Reddit post and add `.json` to its URL (e.g., `https://www.reddit.com/r/.../comments/.../.../.json`).
   - Copy the JSON content into `post.json` in the project folder.

2. **Generate the ChatGPT Prompt**
   - Run:
     ```bash
     node get_chatgpt_prompt.js | pbcopy
     ```
   - **Note**: `pbcopy` is macOS-specific. On other systems, remove `| pbcopy` and manually copy the output from the terminal.

3. **Interact with ChatGPT**
   - Paste the output into ChatGPT and generate the post content.
   - Copy the response JSON in `gptoutput.json`.

4. **Create the Carousel**
   - Run:
     ```bash
     node automate.js
     ```

5. **Export Your Images**
   - Find your completed carousel images in the `exports` folder.

---

## 🛠️ Requirements

- **Node.js**: [Install here](https://nodejs.org/).
- **Photoshop**: Ensure you have access or an alternative setup (e.g. Canva API).
- **ChatGPT**: Use OpenAI's ChatGPT or similar

## 📜 License

This project is licensed under the [Creative Commons Attribution 4.0 International License (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/).  

### You are free to:
- Use, modify, and share the project for any purpose.

### Under the following terms:
- **Attribution**: You must give appropriate credit by including the following in your project or public use:  
  - Project Name: "AI-Powered Photoshop Automation"  
  - Author: ArmaganVideos
  - Link to the original video: [ArmaganVideos Tutorial: AI-powered Photoshop Automation](https://youtu.be/4buHFbngWWc)

---
