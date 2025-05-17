import { FeatureCard } from "./FeatureCard"
export default function Actions() {
    return (
        <>
            <div>
                <FeatureCard
                    title="Generate Quiz"
                    description="Create a quiz based on the uploaded file"
                    variant="primary"
                />
                <FeatureCard
                    title="Summarize Content"
                    description="Summarize the uploaded content"
                    variant="secondary"
                />
                <FeatureCard
                    title="Explain in Simple Language"
                    description="Simplify complex concepts"
                    variant="primary"
                />
                <FeatureCard
                    title="Create short notes"
                    description="Simplify complex concepts"
                    variant="secondary"
                />
            </div>
        </>
    )
}