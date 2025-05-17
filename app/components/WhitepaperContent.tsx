import React from 'react';

export default function WhitepaperContent() {
  return (
    <div className="prose prose-invert prose-purple max-w-none">
      <div className="flex justify-center mb-6">
        <a 
          href="https://github.com/opreturncomment/Web/blob/main/Yellow%20Paper_%20ORC20%20and%20ORC721%20Protocols%20for%20Bitcoin%20Assets%20.docx " 
          target="_blank" 
          rel="noopener noreferrer"
          className="button button-primary flex items-center gap-2 px-4 py-2 rounded-md bg-purple-600 hover:bg-purple-500 transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" fill="currentColor"/>
          </svg>
          Download Yellowpaper PDF
        </a>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">ORC Yellow Paper: Technical Specification for Bitcoin Asset Protocols</h1>
      <div className="text-center mb-16">
        <p className="text-white/70 text-xl">
          Version: 1.2 | May 20, 2025
        </p>
        <p className="text-white/70">
          Authors: The ORC Protocol Team | Hosted Platform: opreturncomment.com
        </p>
      </div>
      
      <h2 className="text-3xl font-bold mt-12 mb-6">Abstract</h2>
      <p>
        This yellow paper presents the technical specifications for the ORC20 and ORC721 protocols, which enable the creation and management of fungible tokens and non-fungible tokens (NFTs) on the Bitcoin blockchain. Utilizing Bitcoin's OP_RETURN opcode for data storage, these protocols avoid UTXO bloat while providing robust token functionality. Unlike Ordinals and Runes, which rely on UTXO attachments for data, the ORC protocols store all token data in unspendable outputs, creating a clean separation between Bitcoin's monetary system and asset metadata. This paper outlines the protocol specifications, implementation details, indexing requirements, and integration pathways for Lightning Network compatibility, establishing a foundation for Bitcoin-based tokenization that aligns with Bitcoin's design philosophy while enabling new use cases.
      </p>
      
      <h2 className="text-3xl font-bold mt-12 mb-6">Table of Contents</h2>
      <ol className="list-decimal list-inside">
        <li>Introduction</li>
        <li>Protocol Design Principles</li>
        <li>ORC20: Fungible Token Standard</li>
        <li>ORC721: Non-Fungible Token Standard</li>
        <li>Transaction Structure and Encoding</li>
        <li>Indexing System Architecture</li>
        <li>Lightning Network Integration</li>
        <li>Compatibility with Existing Standards</li>
        <li>Scaling Considerations</li>
        <li>Security Analysis</li>
        <li>Implementation Roadmap</li>
        <li>Conclusion and Future Work</li>
        <li>References</li>
        <li>Appendices</li>
      </ol>
      
      <h2 className="text-3xl font-bold mt-12 mb-6">1. Introduction</h2>
      
      <h3 className="text-2xl font-bold mt-8 mb-4">1.1 Background</h3>
      <p>
        Bitcoin's permissionless, decentralized design has established it as the world's most secure blockchain. However, its scripting limitations have historically constrained more complex use cases, such as tokenization. The introduction of OP_RETURN in 2014 (BIP 0080) provided a standardized method for embedding small amounts of data in transactions, enabling metadata storage without affecting the UTXO set.
      </p>
      <p>
        Multiple approaches to tokenization on Bitcoin have emerged, including:
      </p>
      <ul className="list-disc list-inside pl-4">
        <li><strong>Colored Coins</strong> (2012-2014): Early attempts to "color" specific bitcoins to represent assets</li>
        <li><strong>Counterparty</strong> (2014): A protocol using OP_RETURN for asset creation and transfers</li>
        <li><strong>Omni Layer</strong> (formerly Mastercoin): A platform enabling custom assets on Bitcoin</li>
        <li><strong>Ordinals</strong> (2023): A system for inscribing data directly into satoshis</li>
        <li><strong>Runes</strong> (2023): A fungible token protocol using OP_RETURN with UTXO references</li>
      </ul>
      <p>
        Each approach has made trade-offs between functionality, efficiency, and Bitcoin's design principles. The ORC protocols build upon these experiences, specifically addressing the limitations of recent standards like Ordinals and Runes.
      </p>
      
      <h3 className="text-2xl font-bold mt-8 mb-4">1.2 Motivation</h3>
      <p>
        Current Bitcoin-based token standards face significant challenges:
      </p>
      <ul className="list-disc list-inside pl-4">
        <li><strong>UTXO Bloat</strong>: Ordinals and Runes attach data to spendable outputs, increasing the UTXO set size</li>
        <li><strong>Limited Functionality</strong>: Runes supports only fungible tokens, lacking NFT capabilities</li>
        <li><strong>Inefficient Encoding</strong>: BRC-20 uses verbose JSON, wasting limited OP_RETURN space</li>
        <li><strong>Layer 2 Challenges</strong>: Existing standards lack native Lightning Network compatibility</li>
        <li><strong>Indexing Complexity</strong>: Off-chain indexers face challenges with consistency and reliability</li>
      </ul>
      <p>
        The ORC protocols address these challenges by:
      </p>
      <ol className="list-decimal list-inside pl-4">
        <li>Storing all token data in unspendable OP_RETURN outputs</li>
        <li>Supporting both fungible (ORC20) and non-fungible (ORC721) tokens</li>
        <li>Using efficient encoding to maximize the 80-byte OP_RETURN capacity</li>
        <li>Designing for Lightning Network compatibility from inception</li>
        <li>Providing a robust indexing solution via opreturncomment.com</li>
      </ol>
      
      <h3 className="text-2xl font-bold mt-8 mb-4">1.3 Design Philosophy</h3>
      <p>
        The ORC protocols adhere to the following principles:
      </p>
      <ul className="list-disc list-inside pl-4">
        <li><strong>Bitcoin Alignment</strong>: Respect Bitcoin's design philosophy and technical constraints</li>
        <li><strong>UTXO Efficiency</strong>: Minimize impact on the UTXO set to preserve Bitcoin's scalability</li>
        <li><strong>Simplicity</strong>: Favor simple, well-defined operations over complex functionality</li>
        <li><strong>Permissionless Innovation</strong>: Enable anyone to create and transfer tokens without gatekeepers</li>
        <li><strong>Layer 2 Compatibility</strong>: Design for compatibility with Lightning Network and other L2 solutions</li>
        <li><strong>Upgrade Path</strong>: Prepare for potential future Bitcoin protocol upgrades</li>
      </ul>
      
      <h2 className="text-3xl font-bold mt-12 mb-6">2. Protocol Design Principles</h2>
      
      <h3 className="text-2xl font-bold mt-8 mb-4">2.1 Separation of Concerns</h3>
      <p>
        The ORC protocols maintain a clear separation between:
      </p>
      <ul className="list-disc list-inside pl-4">
        <li><strong>Value Transfer</strong>: Bitcoin's native UTXO system for monetary value</li>
        <li><strong>Metadata Storage</strong>: OP_RETURN outputs for token data</li>
        <li><strong>State Tracking</strong>: Off-chain indexing system for current token state</li>
      </ul>
      <p>
        This separation ensures that token operations don't compromise Bitcoin's fundamental monetary properties while enabling rich asset functionality.
      </p>
      
      <h3 className="text-2xl font-bold mt-8 mb-4">2.2 Efficient Data Storage</h3>
      <p>
        The 80-byte OP_RETURN limit requires efficient data encoding:
      </p>
      <ul className="list-disc list-inside pl-4">
        <li><strong>Minimal JSON</strong>: Shortened key names and optimized structures</li>
        <li><strong>Binary Encoding</strong>: Using binary formats for identifiers and quantities where appropriate</li>
        <li><strong>Off-Chain References</strong>: IPFS hashes for larger metadata</li>
        <li><strong>Multi-Part Transactions</strong>: Linking multiple transactions for complex operations</li>
      </ul>
      
      <h3 className="text-2xl font-bold mt-8 mb-4">2.3 Security Model</h3>
      <p>
        The ORC protocols inherit Bitcoin's security model with additional considerations:
      </p>
      <ul className="list-disc list-inside pl-4">
        <li><strong>Transaction Validation</strong>: Standard Bitcoin consensus rules for validity</li>
        <li><strong>Ownership Verification</strong>: Public key cryptography for authentication</li>
        <li><strong>Issuer Controls</strong>: Special permissions for token issuers</li>
        <li><strong>Indexer Consensus</strong>: Rules for resolving inconsistencies between indexers</li>
      </ul>
      
      <h2 className="text-3xl font-bold mt-12 mb-6">8. Compatibility with Existing Standards</h2>
      
      <h3 className="text-2xl font-bold mt-8 mb-4">8.1 Ordinals Compatibility</h3>
      <p>
        The ORC721 protocol can represent Ordinals inscriptions:
      </p>
      <ul className="list-disc list-inside pl-4">
        <li><strong>Wrapper Mechanism</strong>: Ordinals can be "wrapped" as ORC721 NFTs</li>
        <li><strong>Two-Way Bridge</strong>: Lock inscription, mint ORC721, and reverse</li>
        <li><strong>Metadata Mapping</strong>: Convert Ordinals metadata to ORC721 format</li>
        <li><strong>Collection Grouping</strong>: Group related inscriptions into collections</li>
      </ul>
      <p>
        Implementation details:
      </p>
      <pre className="bg-[#1c103c] p-4 rounded-md">
        {`{
  "p":"ORC721",
  "op":"wrap",
  "ord":"[inscription ID]",
  "proof":"[ownership proof]"
}`}
      </pre>
      
      <h3 className="text-2xl font-bold mt-8 mb-4">8.2 Runes Compatibility</h3>
      <p>
        The ORC20 protocol can represent Runes tokens:
      </p>
      <ul className="list-disc list-inside pl-4">
        <li><strong>Wrapper Mechanism</strong>: Runes can be wrapped as ORC20 tokens</li>
        <li><strong>Two-Way Bridge</strong>: Lock Runes, mint ORC20, and reverse</li>
        <li><strong>Property Mapping</strong>: Convert Runes parameters to ORC20 format</li>
        <li><strong>Batch Conversion</strong>: Convert multiple Runes in single operation</li>
      </ul>
      
      <h3 className="text-2xl font-bold mt-8 mb-4">8.4 Name Collision Management</h3>
      <p>
        To handle tokens with identical names:
      </p>
      <ul className="list-disc list-inside pl-4">
        <li><strong>Namespace System</strong>: Optional prefixes to distinguish tokens <code>[namespace].[name]</code></li>
        <li><strong>Unique Identifiers</strong>: Each token has a unique ID independent of name</li>
        <li><strong>First-Come-First-Served</strong>: Basic principle for name allocation</li>
        <li><strong>Verification System</strong>: Optional badges for recognized projects</li>
      </ul>
      
      <h2 className="text-3xl font-bold mt-12 mb-6">9. Scaling Considerations</h2>
      
      <h3 className="text-2xl font-bold mt-8 mb-4">9.1 Current Limitations</h3>
      <p>
        The ORC protocols face these scaling challenges:
      </p>
      <ul className="list-disc list-inside pl-4">
        <li><strong>OP_RETURN Size</strong>: 80-byte limit constrains operation complexity</li>
        <li><strong>Transaction Throughput</strong>: Bitcoin's block size limits overall capacity</li>
        <li><strong>Indexer Performance</strong>: Processing high volumes of transactions</li>
        <li><strong>API Capacity</strong>: Handling numerous queries and updates</li>
      </ul>
      
      <h2 className="text-3xl font-bold mt-12 mb-6">7. Lightning Network Integration</h2>
      
      <h3 className="text-2xl font-bold mt-8 mb-4">7.1 Channel Design for Tokens</h3>
      <p>
        ORC tokens can be represented in Lightning channels:
      </p>
      <ul className="list-disc list-inside pl-4">
        <li><strong>Balance Encoding</strong>: Channel state includes token balances</li>
        <li><strong>HTLC Extension</strong>: Hash Time-Locked Contracts for token transfers</li>
        <li><strong>Multi-Asset Channels</strong>: Single channel for multiple token types</li>
        <li><strong>Commitment Transactions</strong>: Modified to represent token ownership</li>
      </ul>
      
      <h3 className="text-2xl font-bold mt-8 mb-4">7.2 Token Transfer Protocol</h3>
      <p>
        The token transfer protocol works as follows:
      </p>
      <ol className="list-decimal list-inside pl-4">
        <li><strong>Invoice Creation</strong>: Recipient generates invoice for token amount</li>
        <li><strong>Path Finding</strong>: Sender finds route with sufficient token liquidity</li>
        <li><strong>HTLC Creation</strong>: Sender initiates token HTLC along the path</li>
        <li><strong>Preimage Revelation</strong>: Recipient reveals preimage to claim tokens</li>
        <li><strong>Settlement</strong>: HTLCs settle, updating channel balances</li>
      </ol>
    </div>
  );
} 
