import { withRouter } from 'next/router'

function b({router}) {
    console.log(router)
    return (
        <div>
            {router.query.id}
        </div>
    )
}

export default withRouter(b)
