import QtQuick 2.6
import QtQuick.Window 2.2


Window {
    id: appWindow
    visible: true
    width: 1280
    height: 720
    title: "Pegasus"
    color: "#000"


    // wrapper to receive keyboard events
    Item {
        anchors.fill: parent

        focus: true
        Keys.forwardTo: [topbar, gamegrid]

        PlatformBar {
            id: topbar
            z: 500
            width: parent.width
        }

        BackgroundImage {
            z: 100
            anchors {
                top: topbar.bottom; bottom: parent.bottom
                left: parent.left; right: parent.right
            }
        }

        GameGrid {
            id: gamegrid
            z: 200
            width: parent.width * 0.65
            anchors {
                top: topbar.bottom; topMargin: 32
                right: parent.right
                bottom: parent.bottom
            }
        }

        GamePreview {
            z: 400
            width: (parent.width * 0.35) - anchors.leftMargin - 40
            anchors {
                top: topbar.bottom; topMargin: 32
                left: parent.left; leftMargin: 10
                bottom: parent.bottom
            }
        }
    }
}
