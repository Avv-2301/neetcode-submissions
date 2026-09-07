class Twitter {
    constructor() {
        this.tweets = new Map();
        this.following = new Map();
        this.time = 0;
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        if (!this.tweets.has(userId)) {
            this.tweets.set(userId, []);
        }
        this.tweets.get(userId).push([this.time++, tweetId]);
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        let allTweets = [];

        if (this.tweets.has(userId)) {
            allTweets.push(...this.tweets.get(userId));
        }

        if (this.following.has(userId)) {
            for (let followee of this.following.get(userId)) {
                if (followee === userId) continue;
                if (this.tweets.has(followee)) {
                    allTweets.push(...this.tweets.get(followee));
                }
            }
        }

        allTweets.sort((a, b) => b[0] - a[0]);
        return allTweets.slice(0, 10).map((x) => x[1]);
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        if(followerId === followeeId) return;
        if (!this.following.has(followerId)) {
            this.following.set(followerId, new Set());
        }
        this.following.get(followerId).add(followeeId);
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        if (this.following.has(followerId)) {
            this.following.get(followerId).delete(followeeId);
        }
    }
}
