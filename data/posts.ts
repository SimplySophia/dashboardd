import { Post } from "@/types/posts";

const posts: Post[] = [
    {
        id: 1,
        title: "Artificial Neural Networks",
        body: 'Artificial neural networks are a subset of machine learning algorithms that are designed to recognize...',
        author: "John Doe",
        date: "2023-10-01",
        comments: [
            {
                id: "1",
                text: "Great post!",
                username: "JaneDoe",
            },
            {
                id: "2",
                text: "Thanks for sharing!",
                username: "Alice",
            },
        ],
    },

    {
        id: 2,
        title: "The Rise of Artificial Intelligence",
        body: "Artificial intelligence is transforming the way we live and work. From self-driving cars to virtual assistants, AI is becoming an integral part of our daily lives.",
        author: "Alex Smith",
        date: "2023-10-02",
        comments: [
            {
                id: "1",
                text: "Interesting perspective!",
                username: "Bob",
            },
            {
                id: "2",
                text: "I agree, AI is the future.",
                username: "Charlie",
            },
        ],
    },

    {
        id: 3,
        title: "Understanding Machine Learning",
        body: "Machine learning is a subset of artificial intelligence that focuses on building systems that learn from data and improve their performance over time.",
        author: "David Johnson",
        date: "2023-10-03",
        comments: [
            {
                id: "1",
                text: "This is a great introduction to ML.",
                username: "Eve",
            },
            {
                id: "2",
                text: "I love machine learning!",
                username: "Frank",
            },
        ]
    },

    {
        id: 4,
        title: "Deep Learning Explained",
        body: "Deep learning is a subset of machine learning that uses neural networks with many layers to analyze various factors of data.",
        author: "Daniel Brown",
        date: "2023-10-04",
        comments: [
            {
                id: "1",
                text: "Deep learning is fascinating!",
                username: "Grace",
            },
            {
                id: "2",
                text: "I want to learn more about this.",
                username: "Heidi",
            },
        ]
    },

    {
        id: 5,
        title: "Natural Language Processing",
        body: "Natural language processing (NLP) is a field of artificial intelligence that focuses on the interaction between computers and humans through natural language.",
        author: "Liam Wilson",
        date: "2023-10-05",
        comments: [
            {
                id: "1",
                text: "NLP is so cool!",
                username: "Ivan",
            },
            {
                id: "2",
                text: "I love working with text data.",
                username: "Judy",
            },
        ]
    },

    {
        id: 6,
        title: "Computer Vision Basics",
        body: "Computer vision is a field of artificial intelligence that trains computers to interpret and understand the visual world.",
        author: "Isabella Taylor",
        date: "2023-10-06",
        comments: [
            {
                id: "1",
                text: "Computer vision is amazing!",
                username: "Kevin",
            },
            {
                id: "2",
                text: "I want to learn more about image processing.",
                username: "Laura",
            },
        ]
    },

    {
        id: 7,
        title: "Reinforcement Learning",
        body: "Reinforcement learning is an area of machine learning concerned with how software agents ought to take actions in an environment in order to maximize some notion of cumulative reward.",
        author: "Thomas Anderson",
        date: "2023-10-07",
        comments: [
            {
                id: "1",
                text: "Reinforcement learning is so interesting!",
                username: "Mallory",
            },
            {
                id: "2",
                text: "I love the idea of training agents.",
                username: "Nina",
            },
        ]
    },

    {
        id: 8,
        title: "Generative Adversarial Networks",
        body: "Generative adversarial networks (GANs) are a class of machine learning frameworks designed by Ian Goodfellow and his colleagues in 2014.",
        author: "Mia Garcia",
        date: "2023-10-08",
        comments: [
            {
                id: "1",
                text: "GANs are revolutionary!",
                username: "Oscar",
            },
            {
                id: "2",
                text: "I want to learn how to implement GANs.",
                username: "Pam",
            },
        ]
    },

    {
        id: 9,
        title: "AI Ethics and Responsibility",
        body: "As AI technology continues to advance, it is crucial to address the ethical implications and responsibilities that come with it.",
        author: "Benjamin Lee",
        date: "2023-10-09",
        comments: [
            {
                id: "1",
                text: "AI ethics is so important!",
                username: "Quentin",
            },
            {
                id: "2",
                text: "We need to discuss the implications of AI.",
                username: "Rachel",
            },
        ]
    },

    {
        id: 10,
        title: "The Future of AI",
        body: "The future of artificial intelligence is bright, with advancements in technology and research paving the way for new possibilities.",
        author: "Robert Martinez",
        date: "2023-10-10",
        comments: [
            {
                id: "1",
                text: "The future looks promising!",
                username: "Steve",
            },
            {
                id: "2",
                text: "I can't wait to see what comes next.",
                username: "Tina",
            },
        ]
    }
];

export default posts;