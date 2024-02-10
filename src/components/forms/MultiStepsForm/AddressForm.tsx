type AddressData = {
    street: string;
    city: string;
    state: string;
    zip: string;
};

type AddressFormProps = AddressData & {
    updateFields: (fields: Partial<AddressData>) => void;
};

export function AddressForm({
    street,
    city,
    state,
    zip,
    updateFields,
}: AddressFormProps) {
    return (
        <>
            <h2
                style={{
                    textAlign: "center",
                    margin: 0,
                    color: "white",
                    fontWeight: "bold",
                }}
            >
                Address Details
            </h2>
            <div id="auth-form">
                <label>Street</label>
                <input
                    autoFocus
                    required
                    type="text"
                    value={street}
                    onChange={(e) => updateFields({ street: e.target.value })}
                />
                <label>City</label>
                <input
                    required
                    type="text"
                    value={city}
                    onChange={(e) => updateFields({ city: e.target.value })}
                />
                <label>State</label>
                <input
                    required
                    type="text"
                    value={state}
                    onChange={(e) => updateFields({ state: e.target.value })}
                />
                <label>Zip</label>
                <input
                    required
                    type="text"
                    value={zip}
                    onChange={(e) => updateFields({ zip: e.target.value })}
                />
            </div>
        </>
    );
}
