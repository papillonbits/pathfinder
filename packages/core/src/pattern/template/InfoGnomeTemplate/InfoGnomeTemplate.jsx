import { primer } from '@papillonbits/components'
import { Link } from 'react-router'
import { Navigator } from '../../molecule/Navigator'
import { propTypes } from './InfoGnomeTemplate.prop'
import { useInfoGnomeState } from './InfoGnomeTemplate.hook'
import styles from './InfoGnomeTemplate.scss'

export function InfoGnomeTemplate() {
  const {
    Alert: { Alert, alertVariant },
    Label,
  } = primer

  const { container, alert, content, contentDisplay, contentDisplayEdit, contentDisplayEditField, contentDisplayEditFieldLabel } = styles

  const {
    placeholderUnknown,
    alertTextInfoGnomes,
    pageContent: {
      infoGnome: { subheadHeadingLeft, subheadHeadingRight },
    },
    progress,
    editedGnomeObject,
  } = useInfoGnomeState()

  return (
    <div className={container}>
      <Alert className={alert} variant={progress.message.type} consent={progress?.consent}>
        {progress.message.text}
      </Alert>
      <Navigator headingLeft={subheadHeadingLeft} headingRight={subheadHeadingRight} />
      {!editedGnomeObject ? (
        <Alert className={alert} variant={alertVariant.warning}>
          {alertTextInfoGnomes.display.noGnomes}
        </Alert>
      ) : (
        <div className={content}>
          <div className={contentDisplay}>
            <div className={contentDisplayEdit}>
              <div>
                <div className={contentDisplayEditField}>
                  <Label className={contentDisplayEditFieldLabel} text="Name" />
                  <Label className={contentDisplayEditFieldLabel} text={editedGnomeObject?.name ?? placeholderUnknown} />
                </div>
                <div className={contentDisplayEditField}>
                  <Label className={contentDisplayEditFieldLabel} text="Age" />
                  <Label className={contentDisplayEditFieldLabel} text={editedGnomeObject?.age ?? placeholderUnknown} />
                </div>
                <div className={contentDisplayEditField}>
                  <Label className={contentDisplayEditFieldLabel} text="Height" />
                  <Label className={contentDisplayEditFieldLabel} text={editedGnomeObject?.height?.toFixed(2) ?? placeholderUnknown} />
                </div>
                <div className={contentDisplayEditField}>
                  <Label className={contentDisplayEditFieldLabel} text="Weight" />
                  <Label className={contentDisplayEditFieldLabel} text={editedGnomeObject?.weight?.toFixed(2) ?? placeholderUnknown} />
                </div>
              </div>
              <div>
                <div className={contentDisplayEditField}>
                  <Label className={contentDisplayEditFieldLabel} text="Hair Color" />
                  <Label className={contentDisplayEditFieldLabel} text={editedGnomeObject?.hairColor ?? placeholderUnknown} />
                </div>
                <div className={contentDisplayEditField}>
                  <Label className={contentDisplayEditFieldLabel} text="Professions" />
                  <Label className={contentDisplayEditFieldLabel} text={editedGnomeObject?.professions.join(' | ') ?? placeholderUnknown} />
                </div>
                <div className={contentDisplayEditField}>
                  <Label className={contentDisplayEditFieldLabel} text="Friends" />
                  <Label className={contentDisplayEditFieldLabel} text={editedGnomeObject?.friends.join(' | ') ?? placeholderUnknown} />
                </div>
                <div className={contentDisplayEditField}>
                  <Label className={contentDisplayEditFieldLabel} text="Thumbnail" />
                  {editedGnomeObject?.thumbnail ? (
                    <Link to={editedGnomeObject?.thumbnail} target="_blank">
                      <Label
                        className={contentDisplayEditFieldLabel}
                        text={editedGnomeObject?.thumbnail?.split('/').pop() ?? placeholderUnknown}
                      />
                    </Link>
                  ) : (
                    <Label
                      className={contentDisplayEditFieldLabel}
                      text={editedGnomeObject?.thumbnail?.split('/').pop() ?? placeholderUnknown}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Alert className={alert} variant={progress.message.type} consent={progress?.consent}>
        {progress.message.text}
      </Alert>
    </div>
  )
}

InfoGnomeTemplate.propTypes = propTypes
