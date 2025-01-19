const fs = require('fs');

// Read the JSON file
fs.readFile('./input/post.json', 'utf8', (err, rawData) => {
    if (err) {
        console.error("Error reading the file:", err);
        return;
    }

    const parsedData = JSON.parse(rawData);

    // Extract post title
    const postTitle = parsedData.find(item => item.kind === 'Listing' && item.data.children[0].kind === 't3')
        ?.data.children[0]?.data?.title || "Untitled Post";

    // Get the comments from the parsed data
    const commentsListing = parsedData.find(item => item.kind === 'Listing' && item.data.children[0].kind === 't1');
    const topComments = commentsListing?.data.children.map(child => child.data.body) || [];

    const cleanedComments = topComments
        .filter(comment => comment && comment !== '[deleted]' && comment !== '[removed]') // Ensure comment exists and remove unwanted ones
        .map(comment => {
            if (typeof comment === 'string') {
                return comment
                    .replace(/\n/g, ' ')      // Replace newline characters with a space
                    .replace(/  +/g, ' ');    // Replace multiple spaces with a single space
            }
            return ''; // Return an empty string for non-string comments
        })
        .slice(0, 5);

    // Read the prompt.txt file
    fs.readFile('./input/prompt.txt', 'utf8', (err, promptContent) => {
        if (err) {
            console.error("Error reading the prompt file:", err);
            return;
        }

        // Replace the placeholders with the post title and cleaned comments
        const finalOutput = promptContent
            .replace('{posttitle}', postTitle)
            .replace('{ top5answers }', cleanedComments.join('\n\n'));

        console.log(finalOutput);
    });
});
