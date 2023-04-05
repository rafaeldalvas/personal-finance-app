import React, { useState } from 'react';

function AssetClassPage() {
    //const [assetClasses, setAssetClasses] = useState([]);
    const [newAssetClass, setNewAssetClass] = useState('');
    const [newAssetPercentage, setNewAssetPercentage] = useState(0);
    const [selectedAssets, setSelectedAssets] = useState([]);

    const handleNewAssetClassSubmit = (event) => {
        event.preventDefault();
        const newAsset = {
            assetClass: newAssetClass,
            percentage: newAssetPercentage,
        };
        if (!selectedAssets.some((asset) => asset.assetClass === newAsset.assetClass)) {
            const totalPercentage = selectedAssets.reduce((total, asset) => total + asset.percentage, 0);
            if (totalPercentage + newAssetPercentage <= 100) {
                setSelectedAssets([...selectedAssets, newAsset]);
            } else {
                alert(`Total percentage is already ${totalPercentage}%. You cannot add this asset.`);
            }
        }
        setNewAssetClass('');
        setNewAssetPercentage(0);
    };

    const handleAssetClassChange = (event) => {
        setNewAssetClass(event.target.value);
    };

    const handleAssetPercentageChange = (event) => {
        setNewAssetPercentage(Number(event.target.value));
    };

    const handleRemoveAsset = (assetClass) => {
        setSelectedAssets(selectedAssets.filter((asset) => asset.assetClass !== assetClass));
    };

    const totalPercentage = selectedAssets.reduce((total, asset) => total + asset.percentage, 0);

    return (
        <div>
            <h1>Asset Class Page</h1>
            <form onSubmit={handleNewAssetClassSubmit}>
                <label htmlFor="assetClass">Select asset class:</label>
                <select id="assetClass" value={newAssetClass} onChange={handleAssetClassChange}>
                    <option value="">-- Select an asset class --</option>
                    <option value="Stocks">Stocks</option>
                    <option value="Bonds">Bonds</option>
                    <option value="Real Estate">Real Estate</option>
                    <option value="Commodities">Commodities</option>
                    <option value="Cryptocurrencies">Cryptocurrencies</option>
                </select>
                <label htmlFor="assetPercentage">Enter asset percentage:</label>
                <input
                    type="number"
                    id="assetPercentage"
                    value={newAssetPercentage}
                    min={0}
                    max={100 - totalPercentage}
                    onChange={handleAssetPercentageChange}
                />
                <button type="submit">Add Asset Class</button>
            </form>
            {selectedAssets.length > 0 && (
                <div>
                    <h2>Selected Assets</h2>
                    <ul>
                        {selectedAssets.map((asset) => (
                            <li key={asset.assetClass}>
                                {asset.assetClass}: {asset.percentage}%
                                <button onClick={() => handleRemoveAsset(asset.assetClass)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                    {totalPercentage >= 100 ? (
                        <p>Total percentage is 100%. You can no longer add assets.</p>
                    ) : (
                        <p>Total percentage is {totalPercentage}%. You can add {100 - totalPercentage}% more assets.</p>
                    )}
                </div>
            )}
        </div>
    );
}

export default AssetClassPage;