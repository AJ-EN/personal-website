import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Building Passkey-Powered Solana Wallets with LazorKit | Ayush Jangid",
    description:
        "Learn how to build passkey-powered Solana wallets with LazorKit. No seed phrases, gasless transactions, and seamless user onboarding.",
    openGraph: {
        title: "Building Passkey-Powered Solana Wallets with LazorKit",
        description:
            "Learn how to build passkey-powered Solana wallets with LazorKit. No seed phrases, gasless transactions.",
        type: "article",
    },
};

export default function LazorKitBlogPost() {
    return (
        <main className="min-h-screen">
            {/* Header */}
            <header className="px-6 md:px-12 lg:px-24 pt-8 max-w-4xl mx-auto">
                <Link
                    href="/"
                    className="text-tron-text-muted hover:text-tron-cyan transition-colors duration-200 font-mono text-sm inline-flex items-center gap-2"
                >
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                    Back to Home
                </Link>
            </header>

            {/* Article */}
            <article className="px-6 md:px-12 lg:px-24 pt-12 pb-20 max-w-4xl mx-auto">
                {/* Title */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-tron-text mb-6 tracking-tight leading-tight">
                    Building Passkey-Powered Solana Wallets with LazorKit
                </h1>

                {/* Meta */}
                <div className="text-tron-text-muted text-sm font-mono mb-12">
                    January 2026 • LazorKit Bounty
                </div>

                {/* Content */}
                <div className="prose-tron">
                    <p className="text-lg text-tron-text-secondary leading-relaxed mb-8">
                        It&apos;s 2025 and blockchain UX is still broken. Users need to install
                        wallet apps, write down seed phrases, and pay gas fees before they
                        can do anything. The technology has advanced, but the onboarding
                        hasn&apos;t.
                    </p>

                    <p className="text-lg text-tron-text-secondary leading-relaxed mb-12">
                        When Solana validators added passkey algorithm support in June 2025,
                        it opened a door. LazorKit is one of the libraries walking through
                        it.
                    </p>

                    {/* The Problem */}
                    <h2 className="text-2xl font-medium text-tron-text mb-6 mt-12">
                        The Problem
                    </h2>

                    <p className="text-tron-text-secondary mb-4">
                        Traditional wallet flow:
                    </p>

                    <ol className="list-decimal list-inside text-tron-text-secondary space-y-2 mb-6 pl-4">
                        <li>Install a browser extension or app</li>
                        <li>Generate a keypair</li>
                        <li>Write down a 12-24 word seed phrase</li>
                        <li>Store it securely (forever)</li>
                        <li>Fund the wallet with SOL for gas</li>
                        <li>Finally... do something</li>
                    </ol>

                    <p className="text-tron-text-secondary mb-8">
                        Every step is a drop-off point. Most users never make it past step
                        3.
                    </p>

                    {/* The Solution */}
                    <h2 className="text-2xl font-medium text-tron-text mb-6 mt-12">
                        The Solution
                    </h2>

                    <p className="text-tron-text-secondary mb-6">
                        Passkeys (WebAuthn/FIDO2) are the same technology banks use for
                        authentication. Your device&apos;s secure enclave stores the key. You
                        authenticate with a fingerprint or face scan.
                    </p>

                    <p className="text-tron-text-secondary mb-4">LazorKit uses this to:</p>

                    <ul className="list-disc list-inside text-tron-text-secondary space-y-2 mb-6 pl-4">
                        <li>Create a Smart Wallet (Program Derived Address) on Solana</li>
                        <li>Sign transactions without exposing any private key</li>
                        <li>Pay gas fees via a Paymaster (users don&apos;t need SOL)</li>
                    </ul>

                    <p className="text-tron-text-secondary mb-4">New user flow:</p>

                    <ol className="list-decimal list-inside text-tron-text-secondary space-y-2 mb-8 pl-4">
                        <li>Click &quot;Connect with Passkey&quot;</li>
                        <li>Use FaceID/TouchID</li>
                        <li>Done. Wallet created.</li>
                    </ol>

                    {/* What I Built */}
                    <h2 className="text-2xl font-medium text-tron-text mb-6 mt-12">
                        What I Built
                    </h2>

                    <p className="text-tron-text-secondary mb-4">
                        A production-ready starter template demonstrating:
                    </p>

                    <ul className="list-disc list-inside text-tron-text-secondary space-y-2 mb-6 pl-4">
                        <li>
                            <span className="text-tron-cyan">Passkey authentication</span> — No
                            seed phrases, no extensions
                        </li>
                        <li>
                            <span className="text-tron-cyan">Gasless transactions</span> — SOL
                            and USDC transfers without holding gas tokens
                        </li>
                        <li>
                            <span className="text-tron-cyan">Session persistence</span> —
                            Sessions survive page refreshes and browser restarts
                        </li>
                        <li>
                            <span className="text-tron-cyan">Auto ATA creation</span> — USDC
                            transfers automatically create recipient token accounts
                        </li>
                    </ul>

                    <p className="text-tron-text-secondary mb-8">
                        The entire demo is ~15 files. Clean architecture, typed hooks,
                        reusable components.
                    </p>

                    {/* Key Implementation Details */}
                    <h2 className="text-2xl font-medium text-tron-text mb-6 mt-12">
                        Key Implementation Details
                    </h2>

                    <h3 className="text-xl font-medium text-tron-text mb-4 mt-8">
                        Provider Setup
                    </h3>

                    <pre className="bg-tron-surface border border-tron-grid rounded-md p-4 overflow-x-auto mb-8">
                        <code className="text-sm font-mono text-tron-text-secondary">
                            {`<LazorkitProvider
  rpcUrl="https://api.devnet.solana.com"
  portalUrl="https://portal.lazor.sh"
  paymasterConfig={{
    paymasterUrl: "https://kora.devnet.lazorkit.com"
  }}
>
  {children}
</LazorkitProvider>`}
                        </code>
                    </pre>

                    <h3 className="text-xl font-medium text-tron-text mb-4 mt-8">
                        Gasless Transaction
                    </h3>

                    <pre className="bg-tron-surface border border-tron-grid rounded-md p-4 overflow-x-auto mb-6">
                        <code className="text-sm font-mono text-tron-text-secondary">
                            {`const instruction = SystemProgram.transfer({
  fromPubkey: smartWalletPubkey,
  toPubkey: new PublicKey(recipient),
  lamports: 0.001 * LAMPORTS_PER_SOL,
});
// User signs with passkey, Paymaster pays gas
const signature = await signAndSendTransaction({
  instructions: [instruction],
});`}
                        </code>
                    </pre>

                    <p className="text-tron-text-secondary mb-8">
                        The user never needs SOL for gas. The Paymaster handles it.
                    </p>

                    {/* Try It */}
                    <h2 className="text-2xl font-medium text-tron-text mb-6 mt-12">
                        Try It
                    </h2>

                    <ul className="space-y-3 mb-8">
                        <li>
                            <span className="text-tron-text-muted">Live Demo: </span>
                            <a
                                href="https://lazorkit-passkey-gasless-demo-beta.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-tron-cyan hover:underline font-mono text-sm"
                            >
                                lazorkit-passkey-gasless-demo-beta.vercel.app
                            </a>
                        </li>
                        <li>
                            <span className="text-tron-text-muted">Source: </span>
                            <a
                                href="https://github.com/AJ-EN/lazorkit-passkey-gasless-demo"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-tron-cyan hover:underline font-mono text-sm"
                            >
                                github.com/AJ-EN/lazorkit-passkey-gasless-demo
                            </a>
                        </li>
                    </ul>

                    <p className="text-tron-text-secondary mb-8">
                        The repo includes 4 step-by-step tutorials covering passkey
                        creation, gasless transactions, session persistence, and mainnet
                        deployment.
                    </p>

                    {/* Why This Matters */}
                    <h2 className="text-2xl font-medium text-tron-text mb-6 mt-12">
                        Why This Matters
                    </h2>

                    <p className="text-tron-text-secondary mb-6">
                        Blockchain adoption isn&apos;t a technology problem anymore. It&apos;s a UX
                        problem.
                    </p>

                    <p className="text-tron-text-secondary mb-6">
                        Every time we remove a step from onboarding, we 10x the potential
                        user base. Passkeys + gasless transactions remove the two biggest
                        barriers: seed phrases and gas fees.
                    </p>

                    <p className="text-tron-text-secondary mb-8 font-medium">
                        The primitives exist. Now we build.
                    </p>

                    {/* Footer Note */}
                    <div className="border-t border-tron-grid pt-8 mt-12">
                        <p className="text-tron-text-muted text-sm italic">
                            This project was built for the LazorKit Bounty (Dec 2025 - Jan
                            2026).
                        </p>
                    </div>
                </div>
            </article>

            {/* Footer */}
            <footer className="px-6 md:px-12 lg:px-24 py-12 max-w-4xl mx-auto border-t border-tron-grid">
                <div className="text-tron-text-muted text-sm font-mono text-center">
                    © {new Date().getFullYear()} Ayush Jangid
                </div>
            </footer>
        </main>
    );
}
