/* eslint-disable react/jsx-props-no-spreading */
import { Modal, useModalState } from '@welcome-ui/modal'

import { SeeMore } from './styles'

import { JOB } from '../../../utils/propTypes'

const JobModal = ({ job }) => {
  const modal = useModalState()

  return (
    <>
      <Modal.Trigger as={SeeMore} {...modal}>
        See More
      </Modal.Trigger>
      <Modal {...modal} ariaLabel="Job description">
        <Modal.Content>
          Praesent sit amet quam ac velit faucibus dapibus. Quisque sapien ligula, rutrum quis
          aliquam nec, convallis sit amet erat. Mauris auctor blandit porta. In imperdiet rutrum
          nunc. Integer suscipit sodales ex, ut lobortis orci rutrum id. Vestibulum scelerisque,
          felis ut sollicitudin elementum, dolor nibh faucibus orci, eu aliquet felis diam sed
          eros. Donec eget sapien lacinia, viverra felis in, placerat urna. Vestibulum sed viverra
          orci. Donec id tellus eget dui porta lobortis ac eu metus. Praesent id ultricies odio.
          In hac habitasse platea dictumst. Sed lorem lacus, hendrerit non sodales id, consectetur
          quis magna. Nullam non lacinia risus, ut varius est. Nam nec pulvinar tellus, eu
          ultrices elit. Cras tincidunt et purus eu condimentum. Nunc vitae consequat nibh.
        </Modal.Content>
      </Modal>
    </>
  )
}

JobModal.propTypes = {
  job: JOB.isRequired,
}

export default JobModal
