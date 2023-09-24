function isPalindrome(string) {
    if (string.length <= 1) return true;

    return (
        string[0] === string[string.length - 1] &&
        isPalindrome(string.slice(1, -1))
    );
}