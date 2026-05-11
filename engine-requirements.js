const isBun = typeof Bun !== 'undefined';

if (isBun) {
    // Logic khusus untuk Bun
    const bunVersion = Bun.version;
    const [major, minor] = bunVersion.split('.').map(v => parseInt(v, 10));

    if (major < 1 || (major === 1 && minor < 3)) {
        console.error(
            "\n========================================\n" +
            " ❌ Runtime Error: Bun version mismatch \n" +
            "----------------------------------------\n" +
            "   This package requires Bun 1.3+       \n" +
            `   You are using Bun ${bunVersion}\n` +
            "   Please upgrade: bun upgrade\n" +
            "========================================\n"
        );
        process.exit(1);
    }
    console.log(`✅ Running with Bun ${bunVersion}`);
} else {
    // Logic khusus untuk Node.js
    const nodeVersion = process.versions.node;
    const major = parseInt(nodeVersion.split('.')[0], 10);

    if (major < 20) {
        console.error(
            "\n========================================\n" +
            " ❌ Runtime Error: Node.js version mismatch \n" +
            "----------------------------------------\n" +
            "   This package requires Node.js 20+    \n" +
            `   You are using Node.js ${nodeVersion}\n` +
            "   Please upgrade your Node.js version.\n" +
            "========================================\n"
        );
        process.exit(1);
    }
    console.log(`✅ Running with Node.js ${nodeVersion}`);
}
