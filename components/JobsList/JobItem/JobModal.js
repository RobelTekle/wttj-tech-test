/* eslint-disable react/jsx-props-no-spreading */
import { Modal, useModalState } from '@welcome-ui/modal'
import { Button } from '@welcome-ui/button'
import { Box } from '@welcome-ui/box'
import { Text } from '@welcome-ui/text'
import { ContractIcon } from '@welcome-ui/icons.contract'
import { LocationIcon } from '@welcome-ui/icons.location'
import { DateIcon } from '@welcome-ui/icons.date'

import formatDistanceToNow from 'date-fns/formatDistanceToNow'

import ModalContentSection from './ModalContentSection'

import {
  SeeMore, InfoList, InfoListItem,
} from './styles'

import { JOB } from '../../../utils/propTypes'
import { getJobLink } from '../../../utils/dataManipulation'

const JobModal = ({ job }) => {
  const modal = useModalState()

  return (
    <>
      <Modal.Trigger as={SeeMore} {...modal}>
        See More
      </Modal.Trigger>
      <Modal {...modal} ariaLabel="Job description">
        <Modal.Content>
          <Box>
            <Box mb="md">
              <Text variant="h3">{job.name}</Text>
            </Box>
            <Box pb="md">
              <InfoList>
                <InfoListItem>
                  <Box mr="xs" display="flex">
                    <ContractIcon />
                  </Box>
                  <Text variant="body2">{job.contract_type.en}</Text>
                </InfoListItem>
                <InfoListItem>
                  <Box mr="xs" display="flex">
                    <LocationIcon />
                  </Box>
                  <Text variant="body2">{job.office.name}</Text>
                </InfoListItem>
                <InfoListItem>
                  <Box mr="xs" display="flex">
                    <DateIcon />
                  </Box>
                  <Text variant="body2">
                    {formatDistanceToNow(
                      new Date(job.published_at), { addSuffix: true },
                    )}

                  </Text>
                </InfoListItem>
              </InfoList>
            </Box>
          </Box>
          {job.description && (
            <ModalContentSection
              title="Description"
              content={job.description}
            />)}
          {job.profile && (
            <ModalContentSection
              title="Profile"
              content={job.profile}
            />)}
          {job.recruitment_process && (
            <ModalContentSection
              title="Recruitment Process"
              content={job.recruitment_process}
            />)}
        </Modal.Content>
        <Modal.Footer minHeight="70px">
          <Box
            display="flex"
            justifyContent="end"
          >
            <Button
              as="a"
              target="_blank"
              href={getJobLink(job)}
              disabled={!getJobLink(job)}
            >
              APPLY
            </Button>
          </Box>
        </Modal.Footer>
      </Modal>
    </>
  )
}

JobModal.propTypes = {
  job: JOB.isRequired,
}

export default JobModal
