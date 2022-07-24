import { SubscriptionCardComponent } from "./subcription-card.component"
import { SubscriptionTitleComponent } from "./subscription-title.component"
import { starterDescription, starterContenu } from "./subcription-card/starter-card"

export const SubscriptionComponent = () => {
    return (
    <>
        <SubscriptionTitleComponent/>
        {SubscriptionCardComponent(starterDescription, starterContenu, 'Le starter', 500)}
    </>
    )
}
